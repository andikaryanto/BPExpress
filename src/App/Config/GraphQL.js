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
    static query() {
        return {
            // register all your graphql query here
            getAllUsers: GetAllUsers.execute(),
            getAllShopProducts: GetAllShopProducts.execute(),
        };
    }

    /**
     * @return {{}}
     */
    static mutation() {
        return {
            // register all your graphql mutation here
            userAdd: UserAdd.execute(),
        };
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
