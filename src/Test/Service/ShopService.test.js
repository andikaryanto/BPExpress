import MshopRepository from '../../App/Repositories/MshopRepository';
import ShopService from '../../App/Services/ShopService';
import sinon from 'sinon';
import {expect} from 'chai';
import CollectionModel from '../../Core/Model/CollectionModel';


describe('search', () => {
    it('should return return array', async () => {
        const shopRepository = new MshopRepository();
        const modelCollection = new CollectionModel([{a: 'a'}]);
        sinon.stub(shopRepository, 'collect').returns(modelCollection);

        const context = new ShopService(shopRepository);
        const result = await context.search('name');

        expect(result).to.be.instanceOf(CollectionModel);
        expect(result.getItems()[0]).to.deep.equals({a: 'a'});
        shopRepository.collect.restore();
    });
});
