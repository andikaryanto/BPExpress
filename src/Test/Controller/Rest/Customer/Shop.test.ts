import ShopService from '../../../../App/Services/ShopService';
import Shop from '../../../../App/Controllers/Rest/Customer/Shop';
import SuccessResponse from '../../../../App/Responses/SuccessResponse';
import ResponseCode from '../../../../App/Constants/ResponseCode';
import MockModule from '../../../../Core/Test/MockModule';
import MshopproductCollection from '../../../../App/ViewModel/Mshopproduct/MshopproductCollection';
import Mshop from '../../../../App/Entity/Mshop';
import Mshopproduct from '../../../../App/Entity/Mshopproduct';
import Mproduct from '../../../../App/Entity/Mproduct';
import MshopproductViewModel from '../../../../App/ViewModel/Mshopproduct/MshopproductViewModel';
import Mproductcategory from '../../../../App/Entity/Mproductcategory';
import EntityList from '../../../../Core/Entity/EntityList';
import ContainerLoader from '../../../../Core/Container/ContainerLoader';

describe('beforeRun', () => {
    const container =  ContainerLoader.load();
    const shopService = container.get('shop.service');

    const service = new Shop(shopService);

    describe('getList', () => {
        it('should return return array of', async () => {
            const shopServiceSearch = MockModule.mockModule(ShopService, 'search', () => {
                const shopProduct = new Mshopproduct();
                shopProduct.setId(1);

                const shop = new Mshop();
                shop.setId(1)
                    .setMshopproducts(new EntityList());

                const modelCollection = new EntityList([shop]);
                return modelCollection;
            });

            const query = {
                Name: 'Test'
            };
            const result = await service.getList({ query });

            expect(result).toBeInstanceOf(SuccessResponse);

            const getResult = await result.getResult();
            expect(getResult).toEqual({
                Page: null,
                Size: null,
                Total: null,
                Data: [
                    {
                        Id: 1,
                        Name: undefined,
                        Owner: undefined,
                        Phone: undefined,
                        MapAddress: undefined,
                        Address: undefined,
                        Shopproducts: [],
                    },
                ],
                Message: 'Success',
                Code: ResponseCode.OK,
                AdditionalData: {},

            });
            expect(shopServiceSearch).toHaveBeenCalled();
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
                .setMproductcategory(productCategory);

            const shopProduct = (new Mshopproduct())
                .setId(100)
                .setMshop(shop)
                .setMproduct(product);

            const modelCollection = [shopProduct];
            const shopServiceProducts = MockModule.mockModule(ShopService, 'products', modelCollection);

            const shopProductViewModel = new MshopproductViewModel(shopProduct);
           
            const param = {
                shopId: 123
            };
            const query = {
                Name: 'Ciki'
            };

            const result = await service.products({param, query});
            expect(result).toBeInstanceOf(SuccessResponse);
            expect(shopServiceProducts).toHaveBeenCalled();
        });
    });
});
