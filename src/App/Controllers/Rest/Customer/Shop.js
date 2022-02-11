
import ResponseData from '../../../../Core/Controller/ResponseData';
import ShopProc from '../../../BusinessProcess/ShopProc';
import ResponseCode from '../../../Constants/ResponseCode';
import SuccessResponse from '../../../Responses/SuccessResponse';
import MshopCollection from '../../../ViewModel/Mshop/MshopCollection';
import MshopproductCollection from '../../../ViewModel/Mshopproduct/MshopproductCollection';

/**
 * @clas Shop
 */
class Shop {
    /**
     * Get all shop list /api/customer/shop/list
     * @method GET
     * @param {*} object
     * @return {ResponseData}
     */
    async getList({request}) {
        const name = request.query.Name;

        const shoplist = await ShopProc.search(name);
        const shopCollection = await (new MshopCollection(shoplist)).proceedAndGetData();

        return (new SuccessResponse('Success', ResponseCode.OK, shopCollection)).send();
    }

    /**
     * Get all shop product /api/customer/shop/:shopId/products
     * @method GET
     * @param {*} object
     * @return {ResponseData}
     */
    async products({request, params, query}) {
        const shopId = params.shopId;
        const name = query.Name;

        const shopProducts = await ShopProc.products(shopId, name);
        const shopProductCollection = await (new MshopproductCollection(shopProducts)).proceedAndGetData();

        return (new SuccessResponse('Success', ResponseCode.OK, shopProductCollection)).send();
    }
}

export default Shop;
