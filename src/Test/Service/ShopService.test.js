import MshopRepository from '../../App/Repositories/MshopRepository';
import ShopService from '../../App/Services/ShopService';
import CollectionModel from '../../Core/Model/CollectionModel';
import M_shops from '../../App/Models/M_shops';
import M_shopproducts from '../../App/Models/M_shopproducts';
import MshopProductRepository from '../../App/Repositories/MshopProductRepository';
import MockModule from '../../Core/Test/MockModule';

describe('beforeRun', () => {
    const shopRepository = new MshopRepository();
    const shopProductRepository = new MshopProductRepository();

    describe('search()', () => {
        it('should return return array', async () => {
            const shopRepoCollect = MockModule.mockModule(MshopRepository, 'collect', () => {
                const shop = new M_shops();
                shop.Id = 1;
                const modelCollection = new CollectionModel([shop]);
                return modelCollection;
            });


            const service = new ShopService(shopRepository);
            const result = await service.search('name');

            expect(result).toBeInstanceOf(CollectionModel);
            expect(result.getItems().length).toEqual(1);
            expect(shopRepoCollect).toHaveBeenCalledTimes(1);
        });
    });

    describe('products()', () => {
        it('should return return array', async () => {
            const shopProductRepoCollect = MockModule.mockModule(ShopService, 'products', () => {
                const shopProduct = new M_shopproducts();
                shopProduct.Id = 1;
                const modelCollection = new CollectionModel([shopProduct]);
                return modelCollection;
            });

            const service = new ShopService(shopRepository, shopProductRepository);
            const result = await service.products(1, 'Name');

            expect(result).toBeInstanceOf(CollectionModel);
            expect(result.getItems().length).toEqual(1);
            expect(shopProductRepoCollect).toHaveBeenCalledTimes(1);
        });
    });
});
