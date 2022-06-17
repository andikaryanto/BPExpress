import Method from './Method';

/**
 * @class Container
 */
class RouteCollector {
    static #_instance;
    #_methods = [];

    /**
     *
     */
    constructor() {

    }

    /**
     * Get instance
     * @return {RouteCollector}
     */
    static getInstance() {
        if (this.#_instance == null) {
            this.#_instance = new this;
        }
        return this.#_instance;
    }

    /**
     *
     * @param {Method} method
     */
    addMethod(method) {
        this.#_methods.push(method);
    }

    /**
     *
     * @return {string}
     */
    getMethods() {
        return this.#_methods;
    }
}

export default RouteCollector;
