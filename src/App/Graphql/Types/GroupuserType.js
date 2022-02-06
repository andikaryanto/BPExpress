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

const GroupuserType = new GraphQLObjectType({
    name: "Groupuser",
    fields: () => ({
        Id: { type: GraphQLID },
        GroupName: { type: GraphQLString }
    })
})

export default GroupuserType;