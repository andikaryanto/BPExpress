
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
import ShopService from '../../../Services/ShopService';

/**
 * @clas UserAdd
 */
class UserAdd extends GraphQLField {
    /**
     * @var {ShopService}
     */
    protected shopService: ShopService;



    /**
       *
       * @param {ShopService} shopService
       */
    constructor(
        shopService: ShopService,
    ) {
        super();
        this.shopService = shopService;
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
    extensions(props: any) {
        let {document, variables, operationName, result, context} = props;
        return '';
    }

    /**
       * @inheritdoc
       */
     async resolve(parent: any, args: any, request: any, context: any) {
        // const user = new M_users();
        // user.Username = args.Username;
        // user.M_Groupuser_Id = args.GroupuserId;
        // user.setPassword(args.Password);
        // await user.save();
        // return user.toJson();
    }
}

export default UserAdd;
