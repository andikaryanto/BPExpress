
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
     * @var {RequestService} requestService
     */
    protected requestService;

    /**
     *
     * @var {ShopService} shopService
     */
    protected shopService;

    /**
     *
     * @param {RequestService} requestService
     * @param {ShopService} shopService
     */
    constructor(requestService: RequestService, shopService: ShopService) {
        this.requestService = requestService;
        this.shopService = shopService;
    }
    /**
     * Get all shop list /api/customer/shop/list
     * @method GET
     * @param {*} object
     * @return {SuccessResponse}
     */
    async getList() {
        const name = this.requestService.getQuery('Name');

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
    async products() {
        const shopId = this.requestService.getParams('shopId');
        const name = this.requestService.getQuery('Name');

        const shopProducts = await this.shopService.products(shopId, name);
        const shopProductCollection = await (new MshopproductCollection(shopProducts)).proceedAndGetData();

        return new SuccessResponse('Success', ResponseCode.OK, shopProductCollection);
    }
}

export default Shop;
