
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
import GraphQLField from '../../../../Core/GraphQL/GraphQLField';
import UserService from '../../../Services/UserService';
import InputUserLogin from '../../Types/Input/InputUserLogin';
import OutputUserLogin from '../../Types/Output/OutputUserLogin';

/**
 * @clas UserLogin
 */
class UserLogin extends GraphQLField {
    /**
     * @var {UserService}
     */
    #_userService;

    /**
       *
       * @param {UserService} userService
       */
    constructor(
        userService,
    ) {
        super();
        this.#_userService = userService;
    }

    /**
       * Return type of the result
       * @return {OutputUserLogin}
       */
    type() {
        return OutputUserLogin;
    }

    /**
       * @inheritdoc
       */
    args() {
        return {
            InputUserLogin: {type: InputUserLogin},
        };
    }

    /**
       * @inheritdoc
       */
    description() {
        return 'Get user token';
    }

    /**
       * @inheritdoc
       */
    extensions({document, variables, operationName, result, context}) {
        return '';
    }

    /**
       * Resolve data
       * @param {any} parent
       * @param {any} args
       * @param {any} request
       * @param {any} context
       * @return {[]}
       */
    async resolve(parent, args, request, context) {
        const username = args.InputUserLogin.username;
        const password = args.InputUserLogin.password;
        const token = await this.#_userService.getToken(username, password);
        return {token};
    }
}

export default UserLogin;
