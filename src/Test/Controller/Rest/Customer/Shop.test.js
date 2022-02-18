import sinon from 'sinon';
import { expect } from 'chai';
import RequestService from '../../../../App/Services/Library/RequestService';
import ShopService from '../../../../App/Services/ShopService';
import CollectionModel from '../../../../Core/Model/CollectionModel';
import Shop from '../../../../App/Controllers/Rest/Customer/Shop';
import SuccessResponse from '../../../../App/Responses/SuccessResponse';
import M_shops from '../../../../App/Models/M_shops';
import M_shopproducts from '../../../../App/Models/M_shopproducts';
import M_products from '../../../../App/Models/M_products';


describe('beforeRun', () => {

    const requestService = new RequestService;
    const shopService = new ShopService;   
    describe('getList', () => {
        it('should return return array of', async () => {
            const modelCollection = new CollectionModel([
                { Id: 1, Name: 'shop123' },
                { Id: 2, Name: 'shop234' }
            ]);

            sinon.stub(requestService, 'getQuery').withArgs('Name').returns('shop123');
            sinon.stub(shopService, 'search').withArgs('shop123').returns(modelCollection);

            const context = new Shop(requestService, shopService);
            const result = await context.getList();

            expect(result).to.be.instanceOf(SuccessResponse);
            expect(result.getResult()).to.deep.equals({
                Message: 'Success',
                Data: [
                    {
                        Id: 1,
                        Name: 'shop123',
                        Owner: undefined,
                        Phone: undefined,
                        MapAddress: undefined,
                        Address: undefined
                    }, {
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
            expect(result.getStatusCode()).to.deep.equals(200);
            requestService.getQuery.restore();
            shopService.search.restore();
        });
    });

    describe('products', () => {
        it('should return return array of', async () => {

            let shopProduct1 = new M_shopproducts();
            shopProduct1.Id = 100;
            shopProduct1.M_Shop_Id = 1;
            shopProduct1.M_Product_Id = 100;
            shopProduct1.PurchasePrice = 12000;
            const modelCollection = new CollectionModel([
                shopProduct1
            ]);
            sinon.stub(requestService, 'getParams').withArgs('shopId').callsFake(() => 'shop123');
            sinon.stub(requestService, 'getQuery').withArgs('Name').callsFake(() => 'Citos');
            sinon.stub(shopService, 'products').callsFake(() => modelCollection);

            const context = new Shop(requestService, shopService);
            const result = await context.products();

            expect(result).to.be.instanceOf(SuccessResponse);
            expect(result.getStatusCode()).to.deep.equals(200);
            requestService.getParams.restore();
            requestService.getQuery.restore();
            shopService.products.restore();
        });
    });
});
