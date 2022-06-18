import ResponseCode from '../../Constants/ResponseCode';
import SuccessResponse from '../../Responses/SuccessResponse';
import MshopViewModel from '../../ViewModel/Mshop/MshopViewModel';

/**
 * @class Shop
 */
class Shop {
    /**
     *
     * @param {any} param0
     * @return {SuccessResponse}
     */
    get({request}) {
        const shop = request.getResource();
        const shopViewModel = new MshopViewModel(shop);
        return new SuccessResponse('OK', ResponseCode.OK, shopViewModel);
    }
}

export default Shop;
