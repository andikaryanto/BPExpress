import MproductRepository from "../App/Repositories/MproductRepository";
import MshopRepository from "../App/Repositories/MshopRepository";
import MuserRepository from "../App/Repositories/MuserRepository";

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('shop.repository', MshopRepository);
    container.register('product.repository', MproductRepository);
    container.register('user.repository', MuserRepository);
}