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
    protected shopService: ShopService;

    /**
      *
      * @param {ShopService} shopService
      */
    constructor(
        shopService: ShopService,
    ) {
        super();
        this.shopService = shopService;
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
    extensions(props: any) {
        const {document, variables, operationName, result, context} = props;
        return '';
    }

    /**
    * @inheritdoc
    */
    middlewares() {
        return ['auth-graphql.middleware'];
    }

    /**
      * @inheritdoc
      */
     async resolve(parent: any, args: any, request: any, context: any) {
        if (request.graphqlError != undefined) {
            throw request.graphqlError;
        }

        const shopId = args.ShopId;
        const productName = args.ProductName;

        const shopProducts = await this.shopService.products(shopId, productName);
        return await (new MshopproductCollection(shopProducts)).proceedAndGetData();
    }
}

export default GetAllShopProducts;
