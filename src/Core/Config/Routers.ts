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
    private router: Router;
    private middleware: [] = [];
    private route: string = '';
    private namedRoute: string = '';
    private namedMiddleware: [] = [];
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
      * @param {[]} middleware
      * @param {Function} callback
      */
    group(route: string, middleware: [], callback: Function) {
        const intance = new Routers();


        if (this.route != null) {
            intance.route = `${this.route}${route}`;
        } else {
            intance.route = `${route}`;
        }
        this.router.use(intance.router);
        intance.middleware = [...this.middleware, ...middleware];
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
        if (!isNamed) {
            if (this.route != null) {
                currentRoute = `${this.route}${route}`;
                // this.namedRoute = currentRoute;
                this.namedMiddleware = middleware;
                this.namedController = controller;
                this.namedFunction = fn;
                this.namedMethod = method;
                this.namedData = additionalData;
            } else {
                this.namedMiddleware = middleware;
                this.namedController = controller;
                this.namedFunction = fn;
                this.namedMethod = method;
                this.namedData = additionalData;
            }
        } else {
            currentRoute = `/${route}`;
        }

        const resReq = async (req: { session: any; params: any; query: any; body: any; }, res: any) => {
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

    /**
      *
      * @param {Request} req
      * @param {Response} res
      * @param {ResponseData|View|Redirect} returnedData
      */
    static return(req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; json: { (arg0: {}): void; new(): any; }; }; send: (arg0: string) => void; render: (arg0: string, arg1: { csrfToken: string | null; lang: (string: any) => any; }) => void; sendFile: (arg0: string) => void; redirect: (arg0: string) => void; }, returnedData: { code: any; data: any; type: string; view: string; route: any; } | undefined) {
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
