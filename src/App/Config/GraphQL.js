import Request from '../../Core/Http/Request';
import GetAllShopProducts from '../Graphql/Resolvers/GetAllShopProducts';
import GetAllUsers from '../Graphql/Resolvers/GetAllUsers';
import UserAdd from '../Graphql/Resolvers/UserAdd';
/**
 * @class GraphQL
 */
class GraphQL {
    /**
     * @return {{}}
     */
    static get query() {
        return {
            // register all your graphql query here
            getAllUsers: GetAllUsers.execute(),
            getAllShopProducts: GetAllShopProducts.execute(),
        };
    }

    /**
     * @return {{}}
     */
    static get mutation() {
        return {
            // register all your graphql mutation here
            userAdd: UserAdd.execute(),
        };
    }

    /**
     * @return {{}}
     */
    static get context() {
        return {

        };
    }
}

export default GraphQL;
