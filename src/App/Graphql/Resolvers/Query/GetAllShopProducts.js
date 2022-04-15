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
import MshopproductCollection from '../../../ViewModel/Mshopproduct/MshopproductCollection';
import OutputShopProduct from '../../Types/Output/OutputShopProduct';

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
            type: new GraphQLList(OutputShopProduct),
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

                const shopService = context.container.get('shop.service');
                const shopProducts = await shopService.products(shopId, productName);
                return await (new MshopproductCollection(shopProducts)).proceedAndGetData();
            },
        };
    }
}

export default GetAllShopProducts;