import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} from 'graphql';

const ProductCategoryType = new GraphQLObjectType({
    name: "ProductCategory",
    fields: () => ({
        Id: { type: GraphQLInt },
        Name: { type: GraphQLString },
        Description: { type: GraphQLString },
        Picture: { type: GraphQLString }
    })
})

export default ProductCategoryType;