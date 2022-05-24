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
