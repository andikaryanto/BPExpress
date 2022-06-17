import InstanceLoader from '../Express/InstanceLoader';
import Error from '../Logger/Error';

const {default: Container} = require('../Container/Container');

/**
 * @class MiddlewareCallback
 */
class MiddlewareCallback {
    /**
     * Will instanciate middleware class class wether from DI or class
     *
     * @param {string} middleware
     * @return {Function}
     */
    static call(middleware) {
        return async (req, res, next) => {
            try {
                const middlewareFunction = middleware.split(':');
                const middlewareAlias = middlewareFunction[0];
                const fn = middlewareFunction[1];
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
}

export default MiddlewareCallback;
