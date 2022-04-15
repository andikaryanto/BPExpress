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
        AppOverride.middleware(app);
        AppOverride.graphQL(app, container);
    }

    /**
      *
      * @param {Express} app
      * @param {CoreContainer} container
      */
    static graphQL(app, container) {
        const RootQuery = new GraphQLObjectType({
            name: 'Query',
            fields: GraphQL.query(),
        });

        const RootMutation = new GraphQLObjectType({
            name: 'Mutation',
            fields: GraphQL.mutation(),
        });

        app.use('/graphql',
            [...Kernel.middlewareGroups.graphql],
            graphqlHTTP(
                (request) => ({
                    schema: new GraphQLSchema({
                        query: RootQuery,
                        mutation: RootMutation,
                    }),
                    graphiql: true,
                    context: {...GraphQL.context(), container, request},
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
        app.use('/api', [VerifyCsrf, ...Kernel.middlewares, ...Kernel.middlewareGroups.api], Api());
        app.use('/', [...Kernel.middlewares, ...Kernel.middlewareGroups.web], Web());
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
        const containerBuilder = new ContainerBuilder();

        for (const service of Container.service) {
            service(containerBuilder);
        }

        return CoreContainer.getInstance().setContainerBuilder(containerBuilder);
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
}

export default AppOverride;
