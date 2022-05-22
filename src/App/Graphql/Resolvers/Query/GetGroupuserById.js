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
import GraphQLField from '../../../../Core/GraphQL/GraphQLField';
import MgroupuserRepository from '../../../Repositories/MgroupuserRepository';
import MgroupuserViewModel from '../../../ViewModel/Mgroupuser/MgroupuserViewModel';
import MshopproductCollection from '../../../ViewModel/Mshopproduct/MshopproductCollection';
import OutputGroupuser from '../../Types/Output/OutputGroupuser';
import OutputShopProduct from '../../Types/Output/OutputShopProduct';

/**
 * @class GetAllShopProducts
 */
class GetGroupuserById extends GraphQLField {
    /**
    * @var {ShopService}
    */
    #_mgroupuserRepository;

    /**
     *
     * @param {MgroupuserRepository} mgroupuserRepository
     */
    constructor(
        mgroupuserRepository,
    ) {
        super();
        this.#_mgroupuserRepository = mgroupuserRepository;
    }

    /**
     * Return type of the result
     * @return {GraphQLList}
     */
    type() {
        return OutputGroupuser;
    }

    /**
     * @inheritdoc
     */
    args() {
        return {
            Id: {
                type: GraphQLInt,
            },
        };
    }

    /**
     * @inheritdoc
     */
    description() {
        return 'Get a groupuser by ID';
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
     * @param {any} context
     * @return {[]}
     */
    async resolve(parent, args, context) {
        const request = context.request;
        if (request.graphqlError != undefined) {
            throw request.graphqlError;
        }

        const id = args.Id;

        const groupuser = await this.#_mgroupuserRepository.find(id);
        const viewModel = new MgroupuserViewModel(groupuser);
        return await viewModel.toJson();
    }
}

export default GetGroupuserById;
