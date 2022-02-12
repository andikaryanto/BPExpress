import { ContainerBuilder, Reference } from "node-dependency-injection";
import CommonService from "../App/Services/Library/CommonService";
import RequestService from "../App/Services/Library/RequestService";
import ShopService from "../App/Services/ShopService";
import UserService from "../App/Services/UserService";

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('shop.service', ShopService)
        .addArgument(new Reference('shop.repository'))
        .addArgument(new Reference('product.repository')); 
        
    container.register('library.common.service', CommonService);
    container.register('library.request.service', RequestService);
    container.register('user.service', UserService)
        .addArgument(new Reference('library.common.service'))
        .addArgument(new Reference('user.repository'));
}