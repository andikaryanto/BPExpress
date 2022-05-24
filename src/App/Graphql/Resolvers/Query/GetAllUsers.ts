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
import MuserRepository from '../../../Repositories/MuserRepository';
import MuserCollection from '../../../ViewModel/Musers/MuserCollection';
import OutputUser from '../../Types/Output/OutputUser';

/**
 * @class GetAllUsers
 */
class GetAllUsers extends GraphQLField {
    /**
     * @var {MuserRepository}
     */
    userRepository;

    /**
     *
     * @param {MuserRepository} userRepository
     */
    constructor(
        userRepository,
    ) {
        super();
        this.userRepository = userRepository;
    }

    /**
     * Return type of the result
     * @return {GraphQLList}
     */
    type() {
        return new GraphQLList(OutputUser);
    }

    /**
     * @inheritdoc
     */
    args() {
        return {
            Username: { type: GraphQLString },
        };
    }

    /**
      * @inheritdoc
     */
    description() {
        return 'Get list of user';
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

        const userList = await this.userRepository.collect();
        return await (new MuserCollection(userList)).proceedAndGetData();
    }
}

export default GetAllUsers;
