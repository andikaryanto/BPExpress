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

const OutputGroupuser = new GraphQLObjectType({
    name: 'Groupuser',
    fields: () => ({
        Id: {type: GraphQLInt},
        GroupName: {type: GraphQLString},
    }),
});

export default OutputGroupuser;
