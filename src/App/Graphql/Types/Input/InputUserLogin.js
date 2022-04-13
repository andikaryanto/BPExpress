import {
    GraphQLInputObjectType,
    GraphQLString,
} from 'graphql';

const InputUserLogin = new GraphQLInputObjectType({
    name: 'InputUserLogin',
    fields: () => ({
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    }),
});

export default InputUserLogin;
