
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
class GenerateUserToken extends GraphQLField {
    /**
     * @var {UserService}
     */
    protected userService: UserService;

    /**
       *
       * @param {UserService} userService
       */
    constructor(
        userService: UserService,
    ) {
        super();
        this.userService = userService;
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
    extensions(props: any) {
        const {document, variables, operationName, result, context} = props;

        return '';
    }

    /**
       * @inheritdoc
       */
     async resolve(parent: any, args: any, request: any, context: any) {
        const username = args.InputUserLogin.username;
        const password = args.InputUserLogin.password;
        const token = await this.userService.getToken(username, password);
        if (token == null) {
            throw Error('Could not get user token');
        }
        return {token};
    }
}

export default GenerateUserToken;
