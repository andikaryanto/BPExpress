
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
     * @return {SuccessResponse}
     */
    async getList() {
        const name = this.#_requestService.getQuery('Name');

        const shoplist = await this.#_shopService.search(name);
        const shopCollection = (new MshopCollection(shoplist)).proceedAndGetData();

        return new SuccessResponse('Success', ResponseCode.OK, shopCollection);
    }

    /**
     * Get all shop product /api/customer/shop/:shopId/products
     * @method GET
     * @param {*} object
     * @return {SuccessResponse}
     */
    async products() {
        const shopId = this.#_requestService.getParams('shopId');
        const name = this.#_requestService.getQuery('Name');

        const shopProducts = await this.#_shopService.products(shopId, name);
        const shopProductCollection = (new MshopproductCollection(shopProducts)).proceedAndGetData();

        return new SuccessResponse('Success', ResponseCode.OK, shopProductCollection);
    }
}

export default Shop;
