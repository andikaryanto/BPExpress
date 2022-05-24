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

const OutputProductCategory = new GraphQLObjectType({
    name: 'ProductCategory',
    fields: () => ({
        Id: {type: GraphQLInt},
        Name: {type: GraphQLString},
        Description: {type: GraphQLString},
        Picture: {type: GraphQLString},
    }),
});

export default OutputProductCategory;
