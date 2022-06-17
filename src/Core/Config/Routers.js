import {Router, Express, Request, Response} from 'express';
import Controller from '../Controller/Controller';
import MiddlewareCallback from '../Middleware/MiddlewareCallback';
import ControllerCallback from '../Controller/ControllerCallback';
/**
 * @class Router
 */
class Routers {
    #_router = null;
    #_middleware = [];
    #_route = null;
    #_namedRoute = '';
    #_namedMiddleware = '';
    #_namedController = '';
    #_namedData = '';
    #_namedMethod = '';

    /**
      *
      * @param {Express} app
      */
    constructor() {
        this.#_router = Router();
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Function} callback
      */
    group(route, middleware, callback) {
        const intance = new Routers();


        if (this.#_route != null) {
            intance.#_route = `${this.#_route}${route}`;
        } else {
            intance.#_route = `${route}`;
        }
        this.#_router.use(intance.#_router);

        const midlewares = middleware.map((e, i) => {
            return MiddlewareCallback.call(e);
        });

        intance.#_middleware = [...this.#_middleware, ...midlewares];
        callback(intance);
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {{}} additionalData
      */
    delete(route, middleware, controller, additionalData = {}) {
        this.doRoute(route, middleware, controller, additionalData, 'DELETE');
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {{}} additionalData
      */
    put(route, middleware, controller, additionalData = {}) {
        this.doRoute(route, middleware, controller, additionalData, 'PUT');
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {{}} additionalData
      */
    post(route, middleware, controller, additionalData = {}) {
        this.doRoute(route, middleware, controller, additionalData, 'POST');
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {{}} additionalData
      * @return {Router}
      */
    get(route, middleware, controller, additionalData = {}) {
        this.doRoute(route, middleware, controller, additionalData, 'GET');
        return this;
    }

    /**
      *
      * @param {string} name
      */
    named(name) {
        this.doRoute(name,
            this.#_namedMiddleware,
            this.#_namedController,
            this.#_namedData,
            this.#_namedMethod,
            true,
        );
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {{}} additionalData
      * @param {string} method
      * @param {boolean} isNamed
      */
    doRoute(route, middleware, controller, additionalData = {}, method = 'GET', isNamed = false) {
        let currentRoute = route;

        const middlewares = middleware.map((e, i) => {
            return MiddlewareCallback.call(e);
        });

        if (!isNamed) {
            if (this.#_route != null) {
                currentRoute = `${this.#_route}${route}`;
                // this.#_namedRoute = currentRoute;
                this.#_namedMiddleware = middlewares;
                this.#_namedController = controller;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            } else {
                this.#_namedMiddleware = middlewares;
                this.#_namedController = controller;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            }
        } else {
            currentRoute = `/${route}`;
        }

        const resReq = ControllerCallback.call(controller, additionalData);

        if (method.toUpperCase() == 'GET') {
            this.#_router.get(`${currentRoute}`, [...this.#_middleware, ...middlewares], resReq);
        }

        if (method.toUpperCase() == 'POST') {
            this.#_router.post(`${currentRoute}`, [...this.#_middleware, ...middlewares], resReq);
        }

        if (method.toUpperCase() == 'PUT') {
            this.#_router.put(`${currentRoute}`, [...this.#_middleware, ...middlewares], resReq);
        }

        if (method.toUpperCase() == 'DELETE') {
            this.#_router.delete(`${currentRoute}`, [...this.#_middleware, ...middlewares], resReq);
        }
    }

    /**
      *
      * @return {Routers}
      */
    getRouter() {
        return this.#_router;
    }
}

export default Routers;
