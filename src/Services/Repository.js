import MproductRepository from '../App/Repositories/MproductRepository';
import MshopProductRepository from '../App/Repositories/MshopProductRepository';
import MshopRepository from '../App/Repositories/MshopRepository';
import MuserRepository from '../App/Repositories/MuserRepository';
import MgroupuserRepository from '../App/Repositories/MgroupuserRepository';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('shop.repository', MshopRepository);
    container.register('product.repository', MproductRepository);
    container.register('user.repository', MuserRepository);
    container.register('shopproduct.repository', MshopProductRepository);
    container.register('groupuser.repository', MgroupuserRepository);
};