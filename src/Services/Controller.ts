import {ContainerBuilder, Reference} from 'node-dependency-injection';
import Email from '../App/Controllers/Email';
import Shop from '../App/Controllers/Rest/Customer/Shop';
import UserApi from '../App/Controllers/Rest/UserApi';
import Test2Controller from '../App/Controllers/Test2Controller';
import TestController from '../App/Controllers/TestController';
import config from '../../config';

/**
 * @param {ContainerBuilder} container
 */
export default (container: ContainerBuilder) => {
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

    container.register('web.email.controller', Email)
        .addArgument(new Reference('transporter.service'));
};
