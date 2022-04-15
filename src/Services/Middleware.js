import {Reference} from 'node-dependency-injection';
import ApiMiddleware from '../App/Middlewares/ApiMiddleware';
import GraphqlMiddleware from '../App/Middlewares/GraphqlMiddleware';
import OfficeMiddleware from '../App/Middlewares/OfficeMiddleware';
import WebUserMiddleware from '../App/Middlewares/WebUserMiddleware';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('office.middleware', OfficeMiddleware);
    container.register('api.middleware', ApiMiddleware);
    container.register('graphql.middleware', GraphqlMiddleware);

    container.register('web-user.middleware', WebUserMiddleware)
        .addArgument(new Reference('library.jwt.service'));

};
