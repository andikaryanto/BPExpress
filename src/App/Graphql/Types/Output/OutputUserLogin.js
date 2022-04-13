import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const OutputUserLogin = new GraphQLObjectType({
    name: 'UserLogin',
    fields: () => ({
        token: {type: GraphQLString}
    }),
});

export default OutputUserLogin;
