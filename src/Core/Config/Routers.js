import {Router, Express, Request, Response} from 'express';
import ConfigView from '../../App/Config/View';
import Controller from '../Controller/Controller';
import Redirect from '../Controller/Redirect';
import ResponseData from '../Controller/ResponseData';
import View from '../Controller/View';
import Template from '../Template/Template';
import Container from '../Container/Container';
import config from '../../../config';
import BaseResponse from '../Controller/Response';
import Error from '../Logger/Error';
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

        let midlewares = middleware.map((e, i) => {
            return Routers.middleware(e);
        })


        intance.#_middleware = [...this.#_middleware, ...midlewares];
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

        let midlewares = middleware.map((e, i) => {
            return Routers.middleware(e);
        })

        if (!isNamed) {
            if (this.#_route != null) {
                currentRoute = `${this.#_route}${route}`;
                // this.#_namedRoute = currentRoute;
                this.#_namedMiddleware = midlewares;
                this.#_namedController = controller;
                this.#_namedFunction = fn;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            } else {
                this.#_namedMiddleware = midlewares;
                this.#_namedController = controller;
                this.#_namedFunction = fn;
                this.#_namedMethod = method;
                this.#_namedData = additionalData;
            }
        } else {
            currentRoute = `/${route}`;
        }

        const resReq = async (req, res, next) => {

            try {
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
                await Routers.response(req, res, returnedData);
            } catch (e) {
                Error.create('error', e.stack);

                if (process.env.APP_MODE == 'development') {
                    next(e);
                }

                if (process.env.APP_MODE == 'production') {
                    res.status(400).send('An error has occured, see error.log for detail');
                }
            }
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
    static async response(req, res, returnedData) {
        if (returnedData == undefined) {
            res.status(400).send('Unexpected Error, Method didnt return anything');
        }

        let response = null;
        if (returnedData instanceof BaseResponse) {
            response = await returnedData.send();
        }

        if (response instanceof ResponseData) {
            res.status(response.code).json(response.data);
        }

        if (returnedData instanceof View) {
            if (returnedData.type == 'html') {
                res.send(returnedData.view);
            }
            if (returnedData.type == 'view') {
                res.render(returnedData.view, {...returnedData.data, ...Template(), ...ConfigView.hook()});
            }
            if (returnedData.type == 'sendFile') {
                res.sendFile(config.sourcePath + '/App/Views/' + returnedData.view);
            }
        }

        if (returnedData instanceof Redirect) {
            res.redirect(returnedData.route);
        }
    }

    static middleware(middleware){

        return async (req, res, next) => {

            // try {
                const container = Container.getInstance().get(middleware);
                const middlewareInstance = container;
        
                middlewareInstance.execute(req, res, next);

            //     let returnedData = null;
            //     if (data instanceof Promise) {
            //         returnedData = await data;
            //     } else {
            //         returnedData = data;
            //     }
            //     await Routers.response(req, res, returnedData);
            // } catch (e) {
            //     Error.create('error', e.stack);

            //     if (process.env.APP_MODE == 'development') {
            //         next(e);
            //     }

            //     if (process.env.APP_MODE == 'production') {
            //         res.status(400).send('An error has occured, see error.log for detail');
            //     }
            // }
        };
    }
}

export default Routers;
