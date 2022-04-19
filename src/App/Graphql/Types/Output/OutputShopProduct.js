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
import OutputProduct from './OutputProduct';

const OutputShopProduct = new GraphQLObjectType({
    name: 'ShopProduct',
    fields: () => ({
        Id: {type: GraphQLInt},
        M_Shop_Id: {type: GraphQLInt},
        PurchasePrice: {type: GraphQLFloat},
        SellPrice: {type: GraphQLFloat},
        Stock: {type: GraphQLInt},
        DiscountType: {type: GraphQLInt},
        DiscountValue: {type: GraphQLFloat},
        IsFeatured: {type: GraphQLBoolean},
        IsActive: {type: GraphQLBoolean},
        Ordering: {type: GraphQLInt},
        Product: {type: OutputProduct},
    }),
});

export default OutputShopProduct;
