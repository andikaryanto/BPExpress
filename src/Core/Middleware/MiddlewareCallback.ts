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
    static call(middleware: string) {
        return async (req: any, res: any, next: any) => {
            try {
                const middlewareInstance = InstanceLoader.load(middleware);

                const data = middlewareInstance.execute(req, res, next);

                let returnedData = null;
                if (data instanceof Promise) {
                    returnedData = await data;
                } else {
                    returnedData = data;
                }
            } catch (_e) {
                let e: Error = _e;
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
