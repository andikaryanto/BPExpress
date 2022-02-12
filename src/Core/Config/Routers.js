import {Router, Express, Request, Response} from 'express';
import ConfigView from '../../App/Config/View';
import Controller from '../Controller/Controller';
import Redirect from '../Controller/Redirect';
import ResponseData from '../Controller/ResponseData';
import View from '../Controller/View';
import Template from '../Template/Template';
import appRoot from 'app-root-path';
import Container from '../Container/Container';
import CoreRequest from '../Http/Request';
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
    #_namedFunction = '';
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
        intance.#_middleware = [...this.#_middleware, ...middleware];
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
    delete(route, middleware, controller, fn, additionalData = {}) {
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
    put(route, middleware, controller, fn, additionalData = {}) {
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
    post(route, middleware, controller, fn, additionalData = {}) {
        this.doRoute(route, middleware, controller, fn, additionalData, 'POST');
    }

    /**
      *
      * @param {string} route
      * @param {[]} middleware
      * @param {Controller} controller
      * @param {string} fn
      * @param {{}} additionalData
      * @return {Router}
      */
    get(route, middleware, controller, fn, additionalData = {}) {
        this.doRoute(route, middleware, controller, fn, additionalData, 'GET');
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
            this.#_namedFunction,
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
      * @param {string} fn
      * @param {{}} additionalData
      * @param {string} method
      * @param {boolean} isNamed
      */
    doRoute(route, middleware, controller, fn, additionalData = {}, method = 'GET', isNamed = false) {
        let currentRoute = route;
        if (!isNamed) {
            if (this.#_route != null) {
                currentRoute = `${this.#_route}${route}`;
                // this.#_namedRoute = currentRoute;
                this.#_namedMiddleware = middleware;
                this.#_namedController = controller;
                this.#_namedFunction = fn;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            } else {
                this.#_namedMiddleware = middleware;
                this.#_namedController = controller;
                this.#_namedFunction = fn;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            }
        } else {
            currentRoute = `/${route}`;
        }

        const resReq = async (req, res) => {
            const container = Container.getInstance().get(controller);
            const controllerInstance = container;
            const data = controllerInstance[fn](
                {
                    request: req,
                    session: req.session,
                    params: req.params,
                    query: req.query,
                    body: req.body,
                    ...additionalData,
                },
            );

            let returnedData = null;
            if (data instanceof Promise) {
                returnedData = await data;
            } else {
                returnedData = data;
            }
            Routers.return(req, res, returnedData);
        };

        if (method.toUpperCase() == 'GET') {
            this.#_router.get(`${currentRoute}`, [...this.#_middleware, ...middleware], resReq);
        }

        if (method.toUpperCase() == 'POST') {
            this.#_router.post(`${currentRoute}`, [...this.#_middleware, ...middleware], resReq);
        }

        if (method.toUpperCase() == 'PUT') {
            this.#_router.put(`${currentRoute}`, [...this.#_middleware, ...middleware], resReq);
        }

        if (method.toUpperCase() == 'DELETE') {
            this.#_router.delete(`${currentRoute}`, [...this.#_middleware, ...middleware], resReq);
        }
    }

    /**
      *
      * @return {Routers}
      */
    getRouter() {
        return this.#_router;
    }

    /**
      *
      * @param {Request} req
      * @param {Response} res
      * @param {ResponseData|View|Redirect} returnedData
      */
    static return(req, res, returnedData) {
        if (returnedData == undefined) {
            res.status(400).send('Unexpexted Error, Method didnt return anything');
        }
        if (returnedData instanceof ResponseData) {
            res.status(returnedData.code).json(returnedData.data);
        }

        if (returnedData instanceof View) {
            if (returnedData.type == 'html') {
                res.send(returnedData.view);
            }
            if (returnedData.type == 'view') {
                res.render(returnedData.view, {...returnedData.data, ...Template(), ...ConfigView.hook()});
            }
            if (returnedData.type == 'sendFile') {
                res.sendFile(appRoot + '/src/App/Views/' + returnedData.view);
            }
        }

        if (returnedData instanceof Redirect) {
            res.redirect(returnedData.route);
        }
    }
}

export default Routers;
