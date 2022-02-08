import M_shopproducts from "../Models/M_shopproducts";
import M_shops from "../Models/M_shops";

class ShopProc {
    static async search(name = null){
        var param = {};

        if(name != null){
            param = {
                like : {
                    Name : name
                }
            }
        }

        var shop = await M_shops.collect(param);0
        return shop;
    }
    
    static async products(shopId, name = null){
        var param = {
            where: {
                M_Shop_Id: shopId
            }
        }

        var shopProducts = await M_shopproducts.collect(param);

        return shopProducts;
    }
}

export default ShopProc;