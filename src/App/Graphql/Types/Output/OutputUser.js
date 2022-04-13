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
} from 'graphql';
import OutputGroupuser from './OutputGroupuser';

const OutputUser = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        Id: {type: GraphQLID},
        Username: {type: GraphQLString},
        Photo: {type: GraphQLString},
        Groupuser: {type: OutputGroupuser},
    }),
});

export default OutputUser;
