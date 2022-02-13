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
import {parserConfiguration} from 'yargs';
import MuserCollection from '../../ViewModel/Musers/MuserCollection';

/**
 * @class GetAllUser
 */
class GetAllUsers {
    /**
     * Execute graphql to return object of
     * @return {{}}
     */
    static execute() {
        return {
            type: new GraphQLList(UserType),
            args: {
                Username: {type: GraphQLString},
            },
            resolve: async function(parent, args, context) {
                const request = context.request;
                if (request.graphqlError != undefined) {
                    throw request.graphqlError;
                }

                let search = {};
                if (args.Username != undefined) {
                    if (args.Username != null && args.Username != '') {
                        search = {
                            like: {
                                Username: args.Username,
                            },
                        };
                    }
                }

                const muserRepository = context.container.get('user.repository');
                const userList = await muserRepository.collect(search);
                return await (new MuserCollection(userList)).proceedAndGetData();
            },
        };
    }
}

export default GetAllUsers;
