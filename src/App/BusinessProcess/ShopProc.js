import CollectionModel from '../../Core/Model/CollectionModel';
import M_shopproducts from '../Models/M_shopproducts';
import M_shops from '../Models/M_shops';
/**
 * @class ShopProc
 */
class ShopProc {
    /**
     * Search for shop
     * @param {string} name
     * @return {CollectionModel}
     */
    static async search(name = null) {
        let param = {};

        if (name != null) {
            param = {
                like: {
                    Name: name,
                },
            };
        }

        const shop = await M_shops.collect(param);
        return shop;
    }
    /**
     * Search for shop's product
     * @param {string|number} shopId
     * @param {string} name
     * @return {[]}
     */
    static async products(shopId, name = null) {
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

        const shopProducts = (await M_shopproducts.collect(param)).getItems();

        return shopProducts;
    }
}

export default ShopProc;
