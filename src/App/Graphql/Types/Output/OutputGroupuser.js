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
import OutputUser from './OutputUser';

const OutputGroupuser = new GraphQLObjectType({
    name: 'Groupuser',
    fields: () => ({
        Id: {type: GraphQLInt},
        GroupName: {type: GraphQLString},
        Users: {type: new GraphQLList(OutputUser)},
    }),
});

export default OutputGroupuser;
