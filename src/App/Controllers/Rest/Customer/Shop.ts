
import ResponseData from '../../../../Core/Controller/ResponseData';
import ShopService from '../../../Services/ShopService';
import ResponseCode from '../../../Constants/ResponseCode';
import SuccessResponse from '../../../Responses/SuccessResponse';
import MshopCollection from '../../../ViewModel/Mshop/MshopCollection';
import MshopproductCollection from '../../../ViewModel/Mshopproduct/MshopproductCollection';
import RequestService from '../../../Services/Library/RequestService';

/**
 * @clas Shop
 */
class Shop {
    /**
     *
     * @var {ShopService} shopService
     */
    protected shopService;

    /**
     *
     * @param {ShopService} shopService
     */
    constructor(shopService: ShopService) {
        this.shopService = shopService;
    }
    /**
     * Get all shop list /api/customer/shop/list
     * @method GET
     * @param {*} object
     * @return {SuccessResponse}
     */
    async getList({query}: any) {
        const name = query['Name'];

        const shoplist = await this.shopService.search(name);
        const shopCollection = new MshopCollection(shoplist);

        return new SuccessResponse('Success', ResponseCode.OK, shopCollection);
    }

    /**
     * Get all shop product /api/customer/shop/:shopId/products
     * @method GET
     * @param {*} object
     * @return {SuccessResponse}
     */
    async products({query, param}: any) {
        const shopId = param['shopId'];
        const name = query['Name'];

        const shopProducts = await this.shopService.products(shopId, name);
        const shopProductCollection = new MshopproductCollection(shopProducts);

        return new SuccessResponse('Success', ResponseCode.OK, shopProductCollection);
    }
}

export default Shop;
