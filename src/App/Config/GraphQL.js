import UserAdd from '../Graphql/Resolvers/Mutation/UserAdd';
import UserLogin from '../Graphql/Resolvers/Mutation/UserLogin';
import GetAllShopProducts from '../Graphql/Resolvers/Query/GetAllShopProducts';
import GetAllUsers from '../Graphql/Resolvers/Query/GetAllUsers';
import GetGroupuserById from '../Graphql/Resolvers/Query/GetGroupuserById';

/**
 * @class GraphQL
 */
class GraphQL {
    /**
     * @return {{}}
     */
    static query() {
        return [
            // register all your graphql query here
            'getAllUser.graphql',
            'getAllShopProducts.graphql',
            'getGroupuserById.graphql',
        ];
    }

    /**
     * @return {{}}
     */
    static mutation() {
        return [
            // register all your graphql mutation here
            'userAdd.graphql',
            'userLogin.graphql',
        ];
    }

    /**
     * @return {{}}
     */
    static context() {
        return {

        };
    }
}

export default GraphQL;
