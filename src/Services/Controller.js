import {Reference} from 'node-dependency-injection';
import Email from '../App/Controllers/Email';
import LoginController from '../App/Controllers/Office/LoginController';
import MgroupuserController from '../App/Controllers/Office/MgroupuserController';
import * as CustomerShop from '../App/Controllers/Rest/Customer/Shop';
import Shop from '../App/Controllers/Rest/Shop';
import UserApi from '../App/Controllers/Rest/UserApi';
import Test2Controller from '../App/Controllers/Test2Controller';
import TestController from '../App/Controllers/TestController';
import config from '../../config';
import ProductController from '../App/Controllers/Rest/ProductController';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('rest.customer.shop.controller', CustomerShop)
        .addArgument(new Reference('library.request.service'))
        .addArgument(new Reference('shop.service'));

    container.register('rest.user.controller', UserApi)
        .addArgument(new Reference('user.service'));

    container.register('web.test.controller', TestController)
        .addArgument(new Reference('entity-manager'))
        .addArgument(new Reference('groupuser.repository'));

    container.register('web.office-login.controller', LoginController)
        .addArgument(new Reference('user.service'));

    container.register('web.office-groupuser.controller', MgroupuserController)
        .addArgument(new Reference('user.service'));

    container.register('web.test2.controller', Test2Controller)
        .addArgument(new Reference('entity-manager'))
        .addArgument(new Reference('entity-unit'))
        .addArgument(new Reference('user.repository'))
        .addArgument(new Reference('groupuser.repository'));

    container.register('web.email.controller', Email)
        .addArgument(new Reference('transporter.service'));

    container.register('rest.shop.controller', Shop);

    container.register('rest.product.controller', ProductController)
        .addArgument(new Reference('entity-unit'))
        .addArgument(new Reference('product.repository'));
};
