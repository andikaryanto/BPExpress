import InstanceLoader from '../Express/InstanceLoader';
import Error from '../Logger/Error';

const {default: Container} = require('../Container/Container');

/**
 * @class MiddlewareCallback
 */
class MiddlewareCallback {
    /**
     * Will instanciate middleware class class wether from DI
     *
     * @param {string} middleware
     * @return {Function}
     */
    static callBefore(middleware) {
        return async (req, res, next) => {
            try {
                let fn = 'execute';
                let middlewareAlias = middleware;
                if (typeof middleware == 'string') {
                    const middlewareFunction = middleware.split(':');
                    middlewareAlias = middlewareFunction[0];
                    fn = middlewareFunction[1];
                }
                const middlewareInstance = InstanceLoader.load(middlewareAlias);

                const data = middlewareInstance[fn](req, res, next);
            } catch (e) {
                Error.create('error', e.stack);

                if (process.env.APP_MODE == 'development') {
                    next(e);
                }

                if (process.env.APP_MODE == 'production') {
                    res.status(500).send('An error has occured, see error.log for detail');
                }
            }
        };
    }

    /**
     * Will instanciate middleware class class wether from DI
     *
     * @param {string} middleware
     * @param {any} req
     * @return {Function}
     */
    static callAfter(middleware, req) {
        let fn = 'execute';
        let middlewareAlias = middleware;
        if (typeof middleware == 'string') {
            const middlewareFunction = middleware.split(':');
            middlewareAlias = middlewareFunction[0];
            fn = middlewareFunction[1];
        }
        console.log(middleware);
        const middlewareInstance = InstanceLoader.load(middlewareAlias);

        return middlewareInstance[fn](req);
    }
}

export default MiddlewareCallback;
