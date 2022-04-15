import {Reference} from 'node-dependency-injection';
import LoginController from '../App/Controllers/Office/LoginController';
import MgroupuserController from '../App/Controllers/Office/MgroupuserController';
import Shop from '../App/Controllers/Rest/Customer/Shop';
import UserApi from '../App/Controllers/Rest/UserApi';
import Test2Controller from '../App/Controllers/Test2Controller';
import TestController from '../App/Controllers/TestController';
import OfficeMiddleware from '../App/Middlewares/OfficeMiddleware';
import WebUserMiddleware from '../App/Middlewares/WebUserMiddleware';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('office.middleware', OfficeMiddleware);

    container.register('web-user.middleware', WebUserMiddleware)
        .addArgument(new Reference('library.jwt.service'));

};
