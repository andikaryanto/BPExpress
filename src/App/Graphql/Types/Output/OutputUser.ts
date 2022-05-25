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
import OutputGroupuser from './OutputGroupuser';

const OutputUser: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        Id: {type: GraphQLInt},
        Username: {type: GraphQLString},
        Photo: {type: GraphQLString},
        Groupuser: {type: OutputGroupuser},
    }),
});

export default OutputUser;
