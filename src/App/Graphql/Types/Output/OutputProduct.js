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
import OutputProductCategory from './OutputProductCategory';

const OutputProduct = new GraphQLObjectType({
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
        ProductCategory: {type: OutputProductCategory},
    }),
});

export default OutputProduct;
