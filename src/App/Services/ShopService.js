import CollectionModel from '../../Core/Model/CollectionModel';
import MshopProductRepository from '../Repositories/MshopProductRepository';
import MshopRepository from '../Repositories/MshopRepository';
/**
 * @class ShopService
 */
class ShopService {
    /**
     *
     * @var {MshopRepository} shopRepository
     */
    #_shopRepository;

    /**
     *
     * @var {MshopProductRepository} shopProductRepository
     */
    #_shopProductRepository;

    /**
     *
     * @param {MshopRepository} shopRepository
     * @param {MshopProductRepository} shopProductRepository
     */
    constructor(shopRepository, shopProductRepository) {
        this.#_shopRepository = shopRepository;
        this.#_shopProductRepository = shopProductRepository;
    }
    /**
     * Search for shop
     * @param {string} name
     * @return {CollectionModel}
     */
    async search(name = null) {
        let param = {};

        if (name != null) {
            param = {
                like: {
                    Name: name,
                },
            };
        }

        const shop = await this.#_shopRepository.collect(param);
        return shop;
    }
    /**
     * Search for shop's product
     * @param {string|number} shopId
     * @param {string} name
     * @return {[]}
     */
    async products(shopId, name = null) {
        try {
            const param = {
                join: {
                    'm_products': {
                        key: [
                            'm_products.Id', 'm_shopproducts.M_Product_Id',
                        ],
                    },
                },
                where: {
                    'm_shopproducts.M_Shop_Id': shopId,
                },
            };

            if (name != null) {
                param['like'] = {
                    'm_products.Name': name,
                };
            }

            const shopProducts = await this.#_shopProductRepository.findAll(param);

            return shopProducts;
        } catch (e) {
            console.log(e);
        }
    }
}

export default ShopService;
