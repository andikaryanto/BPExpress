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
import GraphQLField from '../../../../Core/GraphQL/GraphQLField';
import ShopService from '../../../Services/ShopService';
import MshopproductCollection from '../../../ViewModel/Mshopproduct/MshopproductCollection';
import OutputShopProduct from '../../Types/Output/OutputShopProduct';

/**
 * @class GetAllShopProducts
 */
class GetAllShopProducts extends GraphQLField {
    /**
     * @var {ShopService}
     */
    #_shopService;

    /**
      *
      * @param {ShopService} shopService
      */
    constructor(
        shopService,
    ) {
        super();
        this.#_shopService = shopService;
    }

    /**
      * Return type of the result
      * @return {GraphQLList}
      */
    type() {
        return new GraphQLList(OutputShopProduct);
    }

    /**
      * @inheritdoc
      */
    args() {
        return {
            ShopId: {
                type: new GraphQLNonNull(GraphQLInt),
            },
            ProductName: {
                type: GraphQLString,
            },
        };
    }

    /**
      * @inheritdoc
      */
    description() {
        return 'Get list of products of a shop';
    }

    /**
      * @inheritdoc
      */
    extensions({document, variables, operationName, result, context}) {
        return '';
    }

    /**
    * @inheritdoc
    */
    middlewares() {
        return ['auth-graphql.middleware'];
    }

    /**
      * Resolve data
      * @param {any} parent
      * @param {any} args
       * @param {any} request
      * @param {any} context
      * @return {[]}
      */
    async resolve(parent, args, request, context) {
        if (request.graphqlError != undefined) {
            throw request.graphqlError;
        }

        const shopId = args.ShopId;
        const productName = args.ProductName;

        const shopProducts = await this.#_shopService.products(shopId, productName);
        return await (new MshopproductCollection(shopProducts)).proceedAndGetData();
    }
}

export default GetAllShopProducts;
