import Request from '../../Core/Http/Request';
import GetAllShopProducts from '../Graphql/Resolvers/GetAllShopProducts';
import GetAllUsers from '../Graphql/Resolvers/GetAllUsers';
import UserAdd from '../Graphql/Resolvers/UserAdd';

class GraphQL {
    static get query() {
        return {
            // register all your graphql query here
            getAllUsers: GetAllUsers.execute(),
            getAllShopProducts: GetAllShopProducts.execute(),
        };
    }

    static get mutation() {
        return {
            // register all your graphql mutation here
            userAdd: UserAdd.execute(),
        };
    }

    static get context() {
        return {

        };
    }
}

export default GraphQL;
