
import ShopProc from "../../../BusinessProcess/ShopProc";
import ResponseCode from "../../../Constants/ResponseCode";
import SuccessResponse from "../../../Responses/SuccessResponse";
import MshopCollection from "../../../ViewModel/Mshop/MshopCollection";

class Shop {
    async getList({request}){
        var name = request.query.Name;

        var shoplist = await ShopProc.search(name);
        var shopCollection = await (new MshopCollection(shoplist)).proceedAndGetData();
        return (new SuccessResponse('Success', ResponseCode.OK, shopCollection)).send();
    }
}

export default Shop;