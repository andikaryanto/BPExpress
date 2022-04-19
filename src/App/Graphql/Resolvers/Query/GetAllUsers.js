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
import MuserCollection from '../../../ViewModel/Musers/MuserCollection';
import OutputUser from '../../Types/Output/OutputUser';

/**
 * @class GetAllUsers
 */
class GetAllUsers {
    /**
     * Execute graphql to return object of
     * @return {{}}
     */
    static execute() {
        return {
            type: new GraphQLList(OutputUser),
            args: {
                Username: {type: GraphQLString},
            },
            resolve: async function(parent, args, context) {
                const request = context.request;
                if (request.graphqlError != undefined) {
                    throw request.graphqlError;
                }

                let search = {
                    page: 1,
                    size: 10,
                };
                if (args.Username != undefined) {
                    if (args.Username != null && args.Username != '') {
                        search = {
                            ...search,
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
