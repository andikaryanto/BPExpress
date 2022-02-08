
import ShopProc from "../../../BusinessProcess/ShopProc";
import ResponseCode from "../../../Constants/ResponseCode";
import SuccessResponse from "../../../Responses/SuccessResponse";
import MshopCollection from "../../../ViewModel/Mshop/MshopCollection";
import MshopproductCollection from "../../../ViewModel/Mshopproduct/MshopproductCollection";

class Shop {
    async getList({request}){
        var name = request.query.Name;

        var shoplist = await ShopProc.search(name);
        var shopCollection = await (new MshopCollection(shoplist)).proceedAndGetData();
        
        return (new SuccessResponse('Success', ResponseCode.OK, shopCollection)).send();
    }

    async products({request}){
        var shopId = request.params.shopId;
        var name = request.params.name;

        var shopProducts = await ShopProc.products(shopId, name);
        var shopProductCollection = await (new MshopproductCollection(shopProducts)).proceedAndGetData();

        return (new SuccessResponse('Success', ResponseCode.OK, shopProductCollection)).send();
    }
}

export default Shop;