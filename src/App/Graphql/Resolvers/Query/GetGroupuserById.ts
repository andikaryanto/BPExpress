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
    * @var {MgroupuserRepository}
    */
    protected mgroupuserRepository: MgroupuserRepository;

    /**
     *
     * @param {MgroupuserRepository} mgroupuserRepository
     */
    constructor(
        mgroupuserRepository: MgroupuserRepository,
    ) {
        super();
        this.mgroupuserRepository = mgroupuserRepository;
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
        
        if (request.graphqlError != undefined) {
            throw request.graphqlError;
        }

        const id = args.Id;

        const groupuser = await this.mgroupuserRepository.find(id);
        const viewModel = new MgroupuserViewModel(groupuser);
        return await viewModel.toJson();
    }
}

export default GetGroupuserById;
