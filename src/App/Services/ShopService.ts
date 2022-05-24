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
    protected shopRepository: MshopRepository;

    /**
     *
     * @var {MshopProductRepository} shopProductRepository
     */
    protected shopProductRepository: MshopProductRepository;

    /**
     *
     * @param {MshopRepository} shopRepository
     * @param {MshopProductRepository} shopProductRepository
     */
    constructor(shopRepository: MshopRepository, shopProductRepository: MshopProductRepository) {
        this.shopRepository = shopRepository;
        this.shopProductRepository = shopProductRepository;
    }
    /**
     * Search for shop
     * @param {string} name
     * @return {CollectionModel}
     */
    async search(name:string|null = null) {
        let param = {};

        if (name != null) {
            param = {
                like: {
                    Name: name,
                },
            };
        }

        const shop = await this.shopRepository.collect(param);
        return shop;
    }
    /**
     * Search for shop's product
     * @param {string|number} shopId
     * @param {string} name
     * @return {Promise<[]>}
     */
    async products(shopId: string|number, name: string|null = null) {
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

            const shopProducts = await this.shopProductRepository.collect(param);

            return shopProducts;
        } catch (e) {
            console.log(e);
        }
    }
}

export default ShopService;
