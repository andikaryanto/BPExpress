import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import MgroupuserViewModel from '../../../ViewModel/Mgroupuser/MgroupuserViewModel';
import MshopproductCollection from '../../../ViewModel/Mshopproduct/MshopproductCollection';
import OutputGroupuser from '../../Types/Output/OutputGroupuser';
import OutputShopProduct from '../../Types/Output/OutputShopProduct';

/**
 * @class GetAllShopProducts
 */
class GetGroupuserById {
    /**
     * Execute graphql to return object of
     * @return {{}}
     */
    static execute() {
        return {
            type: OutputGroupuser,
            args: {
                Id: {
                    type: GraphQLInt,
                },
            },
            resolve: async function(parent, args, context) {
                const request = context.request;
                if (request.graphqlError != undefined) {
                    throw request.graphqlError;
                }

                const id = args.Id;

                const groupuserRepository = context.container.get('groupuser.repository');
                const groupuser = await groupuserRepository.find(id);
                const viewModel = new MgroupuserViewModel(groupuser);
                return await viewModel.toJson();
            },
        };
    }
}

export default GetGroupuserById;
