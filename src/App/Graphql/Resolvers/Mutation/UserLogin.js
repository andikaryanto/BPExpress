
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
                InputUserLogin: {type: InputUserLogin}
            },
            resolve: async function(parent, args, context) {
                let userService = context.container.get('user.service');
                let username = args.InputUserLogin.username;
                let password = args.InputUserLogin.password;
                let token = await userService.getToken(username, password);
                return { token };
            },
        };
    }
}

export default UserLogin;
