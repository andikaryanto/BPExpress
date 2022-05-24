// import graphql from 'graphql';
// console.log(graphql.Gra)
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
import OutputGroupuser from './OutputGroupuser.ts';

const OutputUser = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        Id: {type: GraphQLInt},
        Username: {type: GraphQLString},
        Photo: {type: GraphQLString},
        Groupuser: {type: OutputGroupuser},
    }),
});

export default OutputUser;
