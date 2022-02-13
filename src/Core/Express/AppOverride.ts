import Request from '../Http/Request';
import Response from '../Http/Response';
import {Express} from 'express';
import fileUpload from 'express-fileupload';
import session from 'express-session';
import Session from '../Http/Session';
import {v4 as uuidv4} from 'uuid';
import DbConnection from '../Database/Connection/DbConnection';
import Kernel from '../../App/Config/Kernel';
import Web from '../../App/Routes/Web';
import Api from '../../App/Routes/Api';
import csrf from 'csurf';
import VerifyCsrf from '../Middleware/VerifyCsrf';
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
import GraphQL from '../../App/Config/GraphQL';
import Container from '../../App/Config/Container';
import CoreContainer from '../Container/Container';
import {ContainerBuilder} from 'node-dependency-injection';
import RequestInstance from '../Middleware/RequestInstance';
import TypeHelper from '../Libraries/TypeHelper';

/**
 * @class AppOverride
 */
class AppOverride {
    /**
      *
      * @param {Express} app
      */
    static override(app: Express) {
        AppOverride.use(app);
        // AppOverride.csrf(app);
        AppOverride.middleware(app);
        const container = AppOverride.container();
        AppOverride.graphQL(app, container);
    }

    /**
      *
      * @param {Express} app
      * @param {CoreContainer} container
      */
    static graphQL(app: Express, container: CoreContainer) {
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
    static use(app: Express) {
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
                secure: process.env.APP_MODE == 'production' ? true : false,
                httpOnly: process.env.COOKIE_HTTP_ONLY == 'true' ? true : false,
                maxAge: Number(process.env.COOKIE_EXPIRED) * 1000,

            },
            secret: TypeHelper.getString(process.env.APP_KEY),
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
    static middleware(app: Express) {
        app.use('/api', [RequestInstance, VerifyCsrf, ...Kernel.middlewares, ...Kernel.middlewareGroups.api], Api());
        app.use('/', [RequestInstance, ...Kernel.middlewares, ...Kernel.middlewareGroups.web], Web());
    }

    /**
      *
      * @param {Express} app
      */
    static csrf(app: Express) {

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
        // console.log(containerBuilder.getAllService());
    }
}

export default AppOverride;
