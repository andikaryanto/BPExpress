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
import ProductType from './ProductType';

const ShopProductType = new GraphQLObjectType({
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
        Product: {type: ProductType},
    }),
});

export default ShopProductType;
