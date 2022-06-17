import Request from '../Http/Request.js';
import Response from '../Http/Response.js';
import {Express} from 'express';
import fileUpload from 'express-fileupload';
import session from 'express-session';
import Session from '../Http/Session.js';
import {v4 as uuidv4} from 'uuid';
import DbConnection from '../Database/Connection/DbConnection.js';
import Kernel from '../../App/Config/Kernel.js';
import Web from '../../App/Routes/Web.js';
import Api from '../../App/Routes/Api.js';
import csrf from 'csurf';
import VerifyCsrf from '../Middleware/VerifyCsrf.js';
import morgan from 'morgan';
import config from '../../../config';

const rfs = require('rotating-file-stream');
const KnexSessionStore = require('connect-session-knex')(session);
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList,
    Source,
} from 'graphql';
import {graphqlHTTP} from 'express-graphql';
import GraphQL from '../../App/Config/GraphQL.js';
import Container from '../../App/Config/Container.js';
import CoreContainer from '../Container/Container.js';
import {ContainerBuilder} from 'node-dependency-injection';
import RequestInstance from '../Middleware/RequestInstance.js';
import MiddlewareCallback from '../Middleware/MiddlewareCallback.js';
import Cron from '../../App/Config/Cron.js';
import CronService from '../Services/CronService.js';
import ContainerLoader from '../Container/ContainerLoader.js';
import InstanceLoader from './InstanceLoader.js';
import GraphQLLoader from '../GraphQL/GraphQLLoader.js';

/**
 * @class AppOverride
 */
class AppOverride {
    /**
      *
      * @param {Express} app
      */
    static override(app) {
        AppOverride.use(app);
        // AppOverride.csrf(app);
        AppOverride.logger(app);
        const container = AppOverride.container();
        AppOverride.middleware(app, container);
        AppOverride.graphQL(app);
        AppOverride.cron();
    }

    /**
      *
      * @param {Express} app
      * @param {CoreContainer} container
      */
    static graphQL(app) {
        const queryFields = GraphQLLoader.loadQuery(GraphQL.query());
        const mutationFields = GraphQLLoader.loadMutation(GraphQL.mutation());

        const rootQuery = new GraphQLObjectType({
            name: 'Query',
            fields: queryFields,
        });

        const rootMutation = new GraphQLObjectType({
            name: 'Mutation',
            fields: mutationFields,
        });

        app.use('/graphql',
            graphqlHTTP(
                (request, response) => ({
                    schema: new GraphQLSchema({
                        query: rootQuery,
                        mutation: rootMutation,
                    }),
                    graphiql: true,
                    context: {...GraphQL.context(), request, response},
                }),
            ),
        );
    }

    /**
      *
      * @param {Express} app
      */
    static use(app) {
        app.use(fileUpload());

        app.use(Request.request);
        app.use(Response.response);

        const store = new KnexSessionStore({
            tablename: 'sessions',
            createtable: true,
            knex: DbConnection,
        });

        app.use(session({
            name: process.env.SESSION_NAME,
            genid: function(req) {
                return uuidv4(); // use UUIDs for session IDs
            },
            cookie: {
                secure: process.env.APP_MODE == 'production' ? process.env.COOKIE_SECURE : false,
                httpOnly: process.env.COOKIE_HTTP_ONLY == 'true' ? true : false,
                maxAge: Number(process.env.COOKIE_EXPIRED) * 1000,

            },
            secret: process.env.APP_KEY,
            store,
        }));
        app.use(Session.session);

        if (process.env.CSRF_USAGE == 'true') {
            app.use(csrf({
                cookie: false,

            }));
        }
    }

    /**
      *
      * @param {Express} app
      */
    static middleware(app) {
        const eachMiddleware = function(e, i) {
            return MiddlewareCallback.call(e);
        };

        const globalMiddlewares = Kernel.middlewares.map(eachMiddleware);

        const apiMiddlewares = Kernel.middlewareGroups.api.map(eachMiddleware);

        const webMiddlewares = Kernel.middlewareGroups.web.map(eachMiddleware);

        app.use('/api', [...globalMiddlewares, ...apiMiddlewares], Api().getRouter());
        app.use('/', [...globalMiddlewares, ...webMiddlewares], Web().getRouter());
    }

    /**
      *
      * @param {Express} app
      */
    static csrf(app) {

    }

    /**
     * Create conatainer for dependency injection
     * @return {CoreContainer}
     */
    static container() {
        return ContainerLoader.load();
    }

    /**
     *
     * @param {Express} app
     * @return {void}
     */
    static logger(app) {
        const accessLogStream = rfs.createStream('access.log', {
            interval: '1d',
            path: config.sourcePath + '/Write/logs',
        });

        app.use(morgan('combined', {
            stream: accessLogStream,
        }));
    }


    /**
     *
     * @return {void}
     */
    static cron() {
        CronService.resetCron();
    }
}

export default AppOverride;
