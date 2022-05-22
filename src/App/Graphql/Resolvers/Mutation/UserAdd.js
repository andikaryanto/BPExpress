import M_users from '../../../Models/M_users';
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
import OutputUser from '../../Types/Output/OutputUser';
import GraphQLField from '../../../../Core/GraphQL/GraphQLField';

/**
 * @clas UserAdd
 */
class UserAdd extends GraphQLField {
    /**
     * @var {ShopService}
     */
    #_shopService;

    /**
       *
       * @param {ShopService} shopService
       */
    constructor(
        shopService,
    ) {
        super();
        this.#_shopService = shopService;
    }

    /**
       * Return type of the result
       * @return {OutputUser}
       */
    type() {
        return OutputUser;
    }

    /**
       * @inheritdoc
       */
    args() {
        return {
            Username: {type: GraphQLString},
            Password: {type: GraphQLString},
            GroupuserId: {type: GraphQLID},
        };
    }

    /**
       * @inheritdoc
       */
    description() {
        return 'Add new user';
    }

    /**
    * @inheritdoc
    */
    middlewares() {
        return ['auth-graphql.middleware'];
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
        const user = new M_users();
        user.Username = args.Username;
        user.M_Groupuser_Id = args.GroupuserId;
        user.setPassword(args.Password);
        await user.save();
        return user.toJson();
    }
}

export default UserAdd;
