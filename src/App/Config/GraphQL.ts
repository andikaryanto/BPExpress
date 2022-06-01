/**
 * @class GraphQL
 */
class GraphQL {
    /**
     * @return {{}}
     */
    static query(): any[] {
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
    static mutation(): any[] {
        return [
            // register all your graphql mutation here
            'userAdd.graphql',
            'generateUserToken.graphql',
        ];
    }

    /**
     * @return {{}}
     */
    static context(): any {
        return {

        };
    }
}

export default GraphQL;
