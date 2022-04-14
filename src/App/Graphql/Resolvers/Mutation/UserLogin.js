
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
import InputUserLogin from '../../Types/Input/InputUserLogin';
import OutputUserLogin from '../../Types/Output/OutputUserLogin';

/**
 * @clas UserLogin
 */
class UserLogin {
    /**
     * Execute graphql to return object of
     * @return {{}}
     */
    static execute() {
        return {
            type: OutputUserLogin,
            args: {
                InputUserLogin: {type: InputUserLogin},
            },
            resolve: async function(parent, args, context) {
                const userService = context.container.get('user.service');
                const username = args.InputUserLogin.username;
                const password = args.InputUserLogin.password;
                const token = await userService.getToken(username, password);
                return {token};
            },
        };
    }
}

export default UserLogin;
