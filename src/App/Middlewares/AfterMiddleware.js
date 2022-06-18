import Middleware from '../../Core/Middleware/Middleware.js';

/**
 * @class AfterMiddleware
 */
class AfterMiddleware extends Middleware {
    /**
     *
     * @param {any} param0
     * @return {string}
     */
    async anyData() {
        return 'any data returned';
    }
};

export default AfterMiddleware;
