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
import ProductCategoryType from './ProductCategoryType';

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        Id: {type: GraphQLInt},
        M_Productcategory_Id: {type: GraphQLInt},
        Name: {type: GraphQLString},
        Description: {type: GraphQLString},
        Producer: {type: GraphQLString},
        PackSize: {type: GraphQLString},
        Quality: {type: GraphQLString},
        Picture: {type: GraphQLString},
        ProductCategory: {type: ProductCategoryType},
    }),
});

export default ProductType;
