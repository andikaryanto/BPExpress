import {Router, Express, Request, Response} from 'express';
import Controller from '../Controller/Controller';
import MiddlewareCallback from '../Middleware/MiddlewareCallback';
import ControllerCallback from '../Controller/ControllerCallback';
import RouteCollector from './RouteCollector';
import Method from './Method';
/**
 * @class Router
 */
class Routers {
    #_router = null;
    #_route = null;

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
        callback(instance);
    }

    /**
      *
      * @param {string} route
      * @param {string} controller
      * @param {{}} additionalData
      * @return {Routers}
      */
    delete(route, controller, additionalData = {}) {
        return this.doRoute(route, controller, additionalData, 'DELETE');
    }

    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @return {Routers}
      */
    put(route, controller, additionalData = {}) {
        return this.doRoute(route, controller, additionalData, 'PUT');
    }

    /**
      *
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @return {Routers}
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
      * @param {string} route
      * @param {Controller} controller
      * @param {{}} additionalData
      * @param {string} method
      * @return {Method}
      */
    doRoute(route, controller, additionalData = {}, method = 'GET') {
        let currentRoute = route;

        if (this.#_route != null) {
            currentRoute = `${this.#_route}${route}`;
        }

        const routerCollector = RouteCollector.getInstance();

        const methodInstance = new Method(method.toUpperCase(), currentRoute, controller, additionalData);

        routerCollector.addMethod(methodInstance);

        return methodInstance;
    }

    /**
      *
      * @return {Routers}
      */
    getRouter() {
        const routerCollector = RouteCollector.getInstance();
        
        for (const method of routerCollector.getMethods()) {
            const controller = method.getController();
            const additionalData = method.getAdditionalData();
            const resReq = ControllerCallback.call(controller, additionalData, method.getAfterMiddlewares());
            const currentRoute = method.getRoute();

            const beforeMiddlewares = method.getBeforeMiddlewares().map((e, i) => {
                return MiddlewareCallback.callBefore(e);
            });

            if (method.getMethod() == 'GET') {
                this.#_router.get(`${currentRoute}`, beforeMiddlewares, resReq);
            }

            if (method.getMethod() == 'POST') {
                this.#_router.post(`${currentRoute}`, beforeMiddlewares, resReq);
            }

            if (method.getMethod() == 'PUT') {
                this.#_router.put(`${currentRoute}`, beforeMiddlewares, resReq);
            }

            if (method.getMethod() == 'DELETE') {
                this.#_router.delete(`${currentRoute}`, beforeMiddlewares, resReq);
            }
        }

        return this.#_router;
    }
}

export default Routers;
