import RequestService from '../../../../App/Services/Library/RequestService';
import ShopService from '../../../../App/Services/ShopService';
import CollectionModel from '../../../../Core/Model/CollectionModel';
import Shop from '../../../../App/Controllers/Rest/Customer/Shop';
import SuccessResponse from '../../../../App/Responses/SuccessResponse';
import ResponseCode from '../../../../App/Constants/ResponseCode';
import MockModule from '../../../../Core/Test/MockModule';
import MshopproductCollection from '../../../../App/ViewModel/Mshopproduct/MshopproductCollection';
import Mshop from '../../../../App/Entity/Mshop';
import Collection from '../../../../Core/Libraries/Collection';
import Mshopproduct from '../../../../App/Entity/Mshopproduct';
import Mproduct from '../../../../App/Entity/Mproduct';
import MshopproductViewModel from '../../../../App/ViewModel/Mshopproduct/MshopproductViewModel';
import Mproductcategory from '../../../../App/Entity/Mproductcategory';

describe('beforeRun', () => {
    const requestService = new RequestService();
    const shopService = new ShopService();

    const requestServiceGetQuery = jest
        .spyOn(RequestService.prototype, 'getQuery')
        .mockImplementation(() => 'shop123');

    const requestServiceGetParam = jest
        .spyOn(RequestService.prototype, 'getParams')
        .mockImplementation(() => 'Citos');

    const service = new Shop(requestService, shopService);

    describe('getList', () => {
        it('should return return array of', async () => {
            const shopServiceSearch = MockModule.mockModule(ShopService, 'search', () => {
                const shop = new Mshop();
                shop.setId(1);
                const modelCollection = new Collection([shop]);
                return modelCollection;
            });

            const result = await service.getList();

            expect(result).toBeInstanceOf(SuccessResponse);

            const getResult = await result.getResult();
            expect(getResult).toEqual({
                Message: 'Success',
                Data: [
                    {
                        Id: 1,
                        Name: undefined,
                        Owner: undefined,
                        Phone: undefined,
                        MapAddress: undefined,
                        Address: undefined,
                    },
                ],
                Code: ResponseCode.OK,
            });
            expect(shopServiceSearch).toHaveBeenCalled();
            expect(requestServiceGetQuery).toHaveBeenCalled();
        });
    });

    describe('products', () => {
        it('should return return array of', async () => {
            const shop = (new Mshop())
                .setId(100)
                .setName('shop123');

            const productCategory = (new Mproductcategory())
                .setId(100)
                .setName('Category1');

            const product = (new Mproduct())
                .setId(100)
                .setName('Jest')
                .setProductcategory(productCategory);

            const shopProduct = (new Mshopproduct())
                .setId(100)
                .setShop(shop)
                .setProduct(product);

            const modelCollection = [shopProduct];
            const shopServiceProducts = MockModule.mockModule(ShopService, 'products', modelCollection);

            const shopProductViewModel = new MshopproductViewModel(shopProduct);
            const shopServiceProceedAndGetData = MockModule.mockModule(
                MshopproductCollection,
                'proceedAndGetData',
                await shopProductViewModel.toJson(),
            );

            const result = await service.products();
            expect(result).toBeInstanceOf(SuccessResponse);
            expect(shopServiceProducts).toHaveBeenCalled();
            expect(shopServiceProceedAndGetData).toHaveBeenCalled();
            expect(requestServiceGetQuery).toHaveBeenCalled();
            expect(requestServiceGetParam).toHaveBeenCalled();
        });
    });
});
