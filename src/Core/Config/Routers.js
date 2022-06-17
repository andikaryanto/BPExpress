import {Router, Express, Request, Response} from 'express';
import Controller from '../Controller/Controller';
import MiddlewareCallback from '../Middleware/MiddlewareCallback';
import ControllerCallback from '../Controller/ControllerCallback';
/**
 * @class Router
 */
class Routers {
    #_router = null;
    #_routerChild = null;
    #_beforeMiddlewares = [];
    #_afterMiddlewares = [];
    #_route = null;
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
      * @param {Function} callback
      */
    group(route, callback) {
        const instance = new Routers();

        if (this.#_route != null) {
            instance.#_route = `${this.#_route}${route}`;
        } else {
            instance.#_route = `${route}`;
        }
        this.#_router.use(instance.#_router);
        this.#_routerChild = instance;
        callback(instance);
        return this;
    }

    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      */
    delete(route, controller, additionalData = {}) {
        return this.doRoute(route, controller, additionalData, 'DELETE');
    }

    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      */
    put(route, controller, additionalData = {}) {
        return this.doRoute(route, controller, additionalData, 'PUT');
    }

    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      */
    post(route, controller, additionalData = {}) {
        return this.doRoute(route, controller, additionalData, 'POST');
    }

    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @return {Router}
      */
    get(route, controller, additionalData = {}) {
        return this.doRoute(route, controller, additionalData, 'GET');
    }

    /**
      *
      * @param {string} name
      */
    named(name) {
        this.doRoute(name,
            this.#_namedController,
            this.#_namedData,
            this.#_namedMethod,
            true,
        );
    }

    /**
     * 
     * @param {string} middleware 
     */
    before(middleware){
        this.#_routerChild.#_beforeMiddlewares = [...this.#_beforeMiddlewares, middleware];
        console.log(this.#_routerChild);
        return this;
    }

    /**
     * 
     * @param {string} middleware 
     */
    after(middleware){
        this.#_routerChild.#_afterMiddlewares = [...this.#_afterMiddlewares, middleware];
        return this;
    }

    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @param {string} method
      * @param {boolean} isNamed
      */
    doRoute(route, controller, additionalData = {}, method = 'GET', isNamed = false) {
        let currentRoute = route;

        console.log('beofre', this.#_beforeMiddlewares);
        const beforeMiddlewares = this.#_beforeMiddlewares.map((e, i) => {
            return MiddlewareCallback.callBefore(e);
        });

        if (!isNamed) {
            if (this.#_route != null) {
                currentRoute = `${this.#_route}${route}`;
                // this.#_namedRoute = currentRoute;
                this.#_namedController = controller;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            } else {
                this.#_namedController = controller;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            }
        } else {
            currentRoute = `/${route}`;
        }

        console.log('after', this.#_beforeMiddlewares);
        const resReq = ControllerCallback.call(controller, additionalData, this.#_afterMiddlewares);

        if (method.toUpperCase() == 'GET') {
            this.#_router.get(`${currentRoute}`, beforeMiddlewares, resReq);
        }

        if (method.toUpperCase() == 'POST') {
            this.#_router.post(`${currentRoute}`, beforeMiddlewares, resReq);
        }

        if (method.toUpperCase() == 'PUT') {
            this.#_router.put(`${currentRoute}`, beforeMiddlewares, resReq);
        }

        if (method.toUpperCase() == 'DELETE') {
            this.#_router.delete(`${currentRoute}`, beforeMiddlewares, resReq);
        }
        return this;
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
