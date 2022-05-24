import {Router, Express, Request, Response} from 'express';
import Controller from '../Controller/Controller';
import MiddlewareCallback from '../Middleware/MiddlewareCallback';
import ControllerCallback from '../Controller/ControllerCallback';
/**
 * @class Router
 */
class Routers {
    private router: Router;
    private middleware: any = [];
    private route: string = '';
    private namedRoute: string = '';
    private namedMiddleware: any = [];
    private namedController: string = '';
    private namedFunction: string = '';
    private namedData: {} = {};
    private namedMethod: string = '';

    /**
      *
      * @param {Express} app
      */
    constructor() {
        this.router = Router();
    }

    /**
      *
      * @param {string} route
      * @param {any} middleware
      * @param {Function} callback
      */
    group(route: string, middleware: any, callback: Function) {
        const intance = new Routers();


        if (this.route != null) {
            intance.route = `${this.route}${route}`;
        } else {
            intance.route = `${route}`;
        }
        this.router.use(intance.router);

        const midlewares = middleware.map((e: any, i: number) => {
            return MiddlewareCallback.call(e);
        });

        intance.middleware = [...this.middleware, ...midlewares];
        callback(intance);
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {string} fn
      * @param {{}} additionalData
      */
    delete(route: string, middleware: [], controller: string, fn: string, additionalData: {} = {}): void {
        this.doRoute(route, middleware, controller, fn, additionalData, 'DELETE');
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {string} fn
      * @param {{}} additionalData
      */
    put(route: string, middleware: [], controller: string, fn: string, additionalData: {} = {}) {
        this.doRoute(route, middleware, controller, fn, additionalData, 'PUT');
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {string} fn
      * @param {{}} additionalData
      */
    post(route: string, middleware: [], controller: string, fn: string, additionalData: {} = {}) {
        this.doRoute(route, middleware, controller, fn, additionalData, 'POST');
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {string} fn
      * @param {{}} additionalData
      * @return {Routers}
      */
    get(route: string, middleware: [], controller: string, fn: string, additionalData: {} = {}): Routers {
        this.doRoute(route, middleware, controller, fn, additionalData, 'GET');
        return this;
    }

    /**
      *
      * @param {string} name
      */
    named(name: any): void {
        this.doRoute(name,
            this.namedMiddleware,
            this.namedController,
            this.namedFunction,
            this.namedData,
            this.namedMethod,
            true,
        );
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {string} fn
      * @param {{}} additionalData
      * @param {string} method
      * @param {boolean} isNamed
      */
    doRoute(route: string, middleware: [], controller: string, fn: string, additionalData: {} = {}, method: string = 'GET', isNamed: boolean = false) {
        let currentRoute = route;

        const midlewares = middleware.map((e, i) => {
            return MiddlewareCallback.call(e);
        });

        if (!isNamed) {
            if (this.route != null) {
                currentRoute = `${this.route}${route}`;
                // this.namedRoute = currentRoute;
                this.namedMiddleware = midlewares;
                this.namedController = controller;
                this.namedFunction = fn;
                this.namedMethod = method;
                this.namedData = additionalData;
            } else {
                this.namedMiddleware = midlewares;
                this.namedController = controller;
                this.namedFunction = fn;
                this.namedMethod = method;
                this.namedData = additionalData;
            }
        } else {
            currentRoute = `/${route}`;
        }

        const resReq = ControllerCallback.call(controller, fn, additionalData);

        if (method.toUpperCase() == 'GET') {
            this.router.get(`${currentRoute}`, [...this.middleware, ...middleware], resReq);
        }

        if (method.toUpperCase() == 'POST') {
            this.router.post(`${currentRoute}`, [...this.middleware, ...middleware], resReq);
        }

        if (method.toUpperCase() == 'PUT') {
            this.router.put(`${currentRoute}`, [...this.middleware, ...middleware], resReq);
        }

        if (method.toUpperCase() == 'DELETE') {
            this.router.delete(`${currentRoute}`, [...this.middleware, ...middleware], resReq);
        }
    }

    /**
      *
      * @return {Router}
      */
    getRouter(): Router {
        return this.router;
    }
}

export default Routers;