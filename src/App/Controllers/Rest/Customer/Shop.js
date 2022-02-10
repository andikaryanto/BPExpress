
import ShopProc from '../../../BusinessProcess/ShopProc';
import ResponseCode from '../../../Constants/ResponseCode';
import SuccessResponse from '../../../Responses/SuccessResponse';
import MshopCollection from '../../../ViewModel/Mshop/MshopCollection';
import MshopproductCollection from '../../../ViewModel/Mshopproduct/MshopproductCollection';

class Shop {
    async getList({request}) {
        const name = request.query.Name;

        const shoplist = await ShopProc.search(name);
        const shopCollection = await (new MshopCollection(shoplist)).proceedAndGetData();

        return (new SuccessResponse('Success', ResponseCode.OK, shopCollection)).send();
    }

    async products({request, params, query}) {
        const shopId = params.shopId;
        const name = query.Name;

        const shopProducts = await ShopProc.products(shopId, name);
        const shopProductCollection = await (new MshopproductCollection(shopProducts)).proceedAndGetData();

        return (new SuccessResponse('Success', ResponseCode.OK, shopProductCollection)).send();
    }
}

export default Shop;
