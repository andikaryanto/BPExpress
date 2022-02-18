import RequestService from '../../../../App/Services/Library/RequestService';
import ShopService from '../../../../App/Services/ShopService';
import CollectionModel from '../../../../Core/Model/CollectionModel';
import Shop from '../../../../App/Controllers/Rest/Customer/Shop';
import SuccessResponse from '../../../../App/Responses/SuccessResponse';
import M_shops from '../../../../App/Models/M_shops';
import ResponseCode from '../../../../App/Constants/ResponseCode';
import Container from '../../../../Core/Container/Container';
import M_shopproducts from '../../../../App/Models/M_shopproducts';
import MockModule from '../../../../Core/Test/MockModule';

describe('beforeRun', () => {
    // let container = Container.getInstance();
    // const requestService = container.get('request.service');
    // const shopService = container.get('shop.service');

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
                const shop = new M_shops();
                shop.Id = 1;
                const modelCollection = new CollectionModel([shop]);
                return modelCollection;
            });

            const result = await service.getList();

            expect(result).toBeInstanceOf(SuccessResponse);
            expect(result.getResult()).toEqual({
                Message: 'Success',
                Data: [
                    {
                        Id: 1,
                        Name: null,
                        Owner: null,
                        Phone: null,
                        MapAddress: null,
                        Address: null,
                    },
                ],
                Response: ResponseCode.OK,
            });
            expect(shopServiceSearch).toHaveBeenCalled();
            expect(requestServiceGetQuery).toHaveBeenCalled();
        });
    });

    describe('products', () => {
        it('should return return array of', async () => {
            const shopServiceProducts = MockModule.mockModule(ShopService, 'products', () => {
                const shopProduct = new M_shopproducts();
                shopProduct.Id = 1;
                const modelCollection = new CollectionModel([shopProduct]);
                return modelCollection;
            });

            const result = await service.products();
            console.log(result.getResult());
            expect(result).toBeInstanceOf(SuccessResponse);
            expect(shopServiceProducts).toHaveBeenCalledTimes(1);
            expect(requestServiceGetQuery).toHaveBeenCalled();
            expect(requestServiceGetParam).toHaveBeenCalled();
        });
    });
});
