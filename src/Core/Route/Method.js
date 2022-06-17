/**
 * @class Method
 */
class Method {
    #_beforeMiddlewares = [];
    #_afterMiddlewares = [];
    #_method = '';
    #_route = '';
    #_controller = '';
    #_additionalData = {};

    /**
     *
     * @param {string} method
     * @param {string} route
     * @param {string} controller
     * @param {{}} additionalData
     */
    constructor(method, route, controller, additionalData) {
        this.#_method = method;
        this.#_route = route;
        this.#_controller = controller;
        this.#_additionalData = additionalData;
    }

    /**
     *
     * @return {string}
     */
    getAdditionalData() {
        return this.#_additionalData;
    }

    /**
     *
     * @return {string}
     */
    getController() {
        return this.#_controller;
    }

    /**
     *
     * @return {string}
     */
    getRoute() {
        return this.#_route;
    }

    /**
     *
     * @return {string}
     */
    getMethod() {
        return this.#_method;
    }

    /**
     *
     * @param {string} middleware
     * @return {Method}
     */
    before(middleware) {
        this.#_beforeMiddlewares = [...this.#_beforeMiddlewares, middleware];
        return this;
    }

    /**
     *
     * @param {string} middleware
     * @return {Method}
     */
    after(middleware) {
        this.#_afterMiddlewares = [...this.#_afterMiddlewares, middleware];
        return this;
    }

    /**
     *
     * @return {string[]}
     */
    getBeforeMiddlewares() {
        return this.#_beforeMiddlewares;
    }

    /**
     *
     * @return {string[]}
     */
    getAfterMiddlewares() {
        return this.#_afterMiddlewares;
    }
}

export default Method;
