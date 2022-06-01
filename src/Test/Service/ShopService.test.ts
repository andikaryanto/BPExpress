import MshopRepository from '../../App/Repositories/MshopRepository';
import ShopService from '../../App/Services/ShopService';
import MockModule from '../../Core/Test/MockModule';
import Collection from '../../Core/Utilities/Collection';
import Mshop from '../../App/Entity/Mshop';
import Mshopproduct from '../../App/Entity/Mshopproduct';
import ContainerLoader from '../../Core/Container/ContainerLoader';
import EntityList from '../../Core/Entity/EntityList';

describe('beforeRun', () => {
    const container =  ContainerLoader.load();
    const shopRepository = container.get('shop.repository');
    const shopProductRepository = container.get('shopproduct.repository');

    describe('search()', () => {
        it('should return return array', async () => {
            const shopRepoCollect = MockModule.mockModule(MshopRepository, 'collect', () => {
                const shop = (new Mshop()).setId(1);
                const modelCollection = new EntityList<Mshop>([shop]);
                return modelCollection;
            });


            const service = new ShopService(shopRepository, shopProductRepository);
            const result = await service.search('name');

            expect(result).toBeInstanceOf(EntityList);
            expect(result.getItems().length).toEqual(1);
            expect(shopRepoCollect).toHaveBeenCalledTimes(1);
        });
    });

    describe('products()', () => {
        it('should return return array', async () => {
            const shopProductRepoCollect = MockModule.mockModule(ShopService, 'products', () => {
                const shopProduct = (new Mshopproduct()).setId(1);
                const modelCollection = new Collection([shopProduct]);
                return modelCollection;
            });

            const service = new ShopService(shopRepository, shopProductRepository);
            const result = await service.products(1, 'Name');

            expect(result).toBeInstanceOf(Collection);
            expect(result.getItems().length).toEqual(1);
            expect(shopProductRepoCollect).toHaveBeenCalledTimes(1);
        });
    });
});
