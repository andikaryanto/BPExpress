import Middleware from '../../Core/Middleware/Middleware.js';

/**
 *
 */
class AfterMiddleware  extends Middleware {
    /**
    * @param {Request} req
    * @return {void}
     */
    async anyData(req) {
        return 'any data returned';
    }
};

export default AfterMiddleware ;
