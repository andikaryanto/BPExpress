import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import ShopProductType from '../Types/ShopProductType';
import MshopproductCollection from '../../ViewModel/Mshopproduct/MshopproductCollection';
import ShopProc from '../../BusinessProcess/ShopProc';

/**
 * @class GetAllShopProducts
 */
class GetAllShopProducts {
    /**
     * Execute graphql to return object of
     * @return {{}}
     */
    static execute() {
        return {
            type: new GraphQLList(ShopProductType),
            args: {
                ShopId: {
                    type: new GraphQLNonNull(GraphQLInt),
                },
                ProductName: {
                    type: GraphQLString,
                },
            },
            resolve: async function(parent, args, context) {
                const request = context.request;
                if (request.graphqlError != undefined) {
                    throw request.graphqlError;
                }

                const shopId = args.ShopId;
                const productName = args.ProductName;

                const shopProducts = await ShopProc.products(shopId, productName);
                return (new MshopproductCollection(shopProducts)).proceedAndGetData();
            },
        };
    }
}

export default GetAllShopProducts;