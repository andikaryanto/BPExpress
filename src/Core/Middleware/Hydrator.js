import Middleware from './Middleware';

/**
 * @class Hydrator
 */
class Hydrator extends Middleware {
    /**
     * Hidrate resource
     */
    hidrate({request, params, next}) {
        throw new Error('"hidrate" function must be overrided');
    }
}

export default Hydrator;
