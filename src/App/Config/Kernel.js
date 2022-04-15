import VerifyCsrf from '../../Core/Middleware/VerifyCsrf.js';
import GraphqlMiddleware from '../Middlewares/GraphqlMiddleware.js';
/**
 * @class Kernel
 */
class Kernel {
    /**
      * global middlewares will be applied to any request if you set the middlewares in array bellow
      * @return {[]}
      */
    static get middlewares() {
        return [
            // You middle ware goes here
            // TestMiddleware
        ];
    }

    /**
      * Group middlewares will be applied to any request in specific web or api group
      * @return {[]}
      */
    static get middlewareGroups() {
        return {
            web: [
                // You middle ware goes here
                VerifyCsrf,
            ],
            api: [
                // You middle ware goes here

            ],
            graphql: [
                'graphql.middleware',
            ],
        };
    }
}

export default Kernel;
