import {Reference} from 'node-dependency-injection';
import Shop from '../App/Controllers/Rest/Customer/Shop';
import UserApi from '../App/Controllers/Rest/UserApi';
import Test2Controller from '../App/Controllers/Test2Controller';
import TestController from '../App/Controllers/TestController';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('rest.customer.shop.controller', Shop)
        .addArgument(new Reference('library.request.service'))
        .addArgument(new Reference('shop.service'));

    container.register('rest.user.controller', UserApi)
        .addArgument(new Reference('user.service'));

    container.register('web.test.controller', TestController)
        .addArgument(new Reference('entity-manager'))
        .addArgument(new Reference('groupuser.repository'));

    container.register('web.test2.controller', Test2Controller)
        .addArgument(new Reference('entity-manager'))
        .addArgument(new Reference('entity-unit'))
        .addArgument(new Reference('user.repository'))
        .addArgument(new Reference('groupuser.repository'));
};
