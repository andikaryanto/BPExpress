import M_users from '../../Models/M_users';
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
import UserType from '../Types/UserType';

/**
 * @clas UserAdd
 */
class UserAdd {
    /**
     * Execute graphql to return object of
     * @return {{}}
     */
    static execute() {
        return {
            type: UserType,
            args: {
                Username: {type: GraphQLString},
                Password: {type: GraphQLString},
                GroupuserId: {type: GraphQLID},
            },
            resolve: async function(parent: any, args: any) {
                const user = new M_users();
                user.Username = args.Username;
                user.M_Groupuser_Id = args.GroupuserId;
                user.setPassword(args.Password);
                await user.save();
                return user.toJson();
            },
        };
    }
}

export default UserAdd;
