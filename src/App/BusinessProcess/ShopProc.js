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
}

export default ShopProc;