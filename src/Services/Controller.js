import {Reference} from 'node-dependency-injection';
import Shop from '../App/Controllers/Rest/Customer/Shop';
import UserApi from '../App/Controllers/Rest/UserApi';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('rest.customer.shop.controller', Shop)
        .addArgument(new Reference('library.request.service'))
        .addArgument(new Reference('shop.service'));

    container.register('rest.user.controller', UserApi)
        .addArgument(new Reference('user.service'));
};
