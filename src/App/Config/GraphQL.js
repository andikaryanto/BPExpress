import UserAdd from "../Graphql/Resolvers/Mutation/UserAdd";
import UserLogin from "../Graphql/Resolvers/Mutation/UserLogin";
import GetAllShopProducts from "../Graphql/Resolvers/Query/GetAllShopProducts";
import GetAllUsers from "../Graphql/Resolvers/Query/GetAllUsers";

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
            userLogin: UserLogin.execute()
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
