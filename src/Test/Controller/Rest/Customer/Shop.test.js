import sinon from 'sinon';
import {expect} from 'chai';
import RequestService from '../../../../App/Services/Library/RequestService';
import ShopService from '../../../../App/Services/ShopService';
import MshopRepository from '../../../../App/Repositories/MshopRepository';
import CollectionModel from '../../../../Core/Model/CollectionModel';
import Shop from '../../../../App/Controllers/Rest/Customer/Shop';
import SuccessResponse from '../../../../App/Responses/SuccessResponse';
import ResponseData from '../../../../Core/Controller/ResponseData';
import ResponseCode from '../../../../App/Constants/ResponseCode';


describe('search', () => {
    it('should return return array', async () => {
        const requestService = new RequestService;
        const shopService = new ShopService;
        const modelCollection = new CollectionModel([
            {Id: 1, Name: 'shop123'},
            {Id: 2, Name: 'shop234'}
        ]);

        sinon.stub(requestService, 'getQuery').returns('shop123');
        sinon.stub(shopService, 'search').returns(modelCollection);

        const context = new Shop(requestService, shopService);
        const result = await context.getList();

        expect(result).to.be.instanceOf(ResponseData);
        expect(result.data).to.deep.equals({
            Message: 'Success',
            Data: [
              {
                Id: 1,
                Name: 'shop123',
                Owner: undefined,
                Phone: undefined,
                MapAddress: undefined,
                Address: undefined
              },{
                Id: 2,
                Name: 'shop234',
                Owner: undefined,
                Phone: undefined,
                MapAddress: undefined,
                Address: undefined
              }
            ],
            Response: { Status: 'OK', Code: 1000 }
          });
        expect(result.code).to.deep.equals(200);
        requestService.getQuery.restore();
        shopService.search.restore();
    });
});
