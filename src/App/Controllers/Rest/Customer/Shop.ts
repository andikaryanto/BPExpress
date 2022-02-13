
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
    #_requestService;

    /**
     *
     * @var {ShopService} shopService
     */
    #_shopService;

    /**
     *
     * @param {RequestService} requestService
     * @param {ShopService} shopService
     */
    constructor(requestService, shopService) {
        this.#_requestService = requestService;
        this.#_shopService = shopService;
    }
    /**
     * Get all shop list /api/customer/shop/list
     * @method GET
     * @param {*} object
     * @return {ResponseData}
     */
    async getList() {
        const name = this.#_requestService.getQuery('Name');

        const shoplist = await this.#_shopService.search(name);
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

        const shopProducts = await this.#_shopService.products(shopId, name);
        const shopProductCollection = await (new MshopproductCollection(shopProducts)).proceedAndGetData();

        return (new SuccessResponse('Success', ResponseCode.OK, shopProductCollection)).send();
    }
}

export default Shop;
