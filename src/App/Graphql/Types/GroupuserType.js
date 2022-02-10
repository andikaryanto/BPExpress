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

const GroupuserType = new GraphQLObjectType({
    name: 'Groupuser',
    fields: () => ({
        Id: {type: GraphQLInt},
        GroupName: {type: GraphQLString},
    }),
});

export default GroupuserType;
