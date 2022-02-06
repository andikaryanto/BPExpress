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
    GraphQLList
} from 'graphql';
import GroupuserType from './GroupuserType';

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        Id: { type: GraphQLID },
        Username: { type: GraphQLString },
        Photo: { type: GraphQLString },
        Groupuser: { type: GroupuserType }
    })
})

export default UserType;