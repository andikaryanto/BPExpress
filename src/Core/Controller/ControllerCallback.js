import Error from '../Logger/Error';
import Redirect from './Redirect';
import ResponseData from './ResponseData';
import View from './View';
import BaseResponse from '../Controller/Response';
import {Request, Response} from 'express';
import config from '../../../config';
import Template from '../Template/Template';
import ConfigView from '../../App/Config/View';
import InstanceLoader from '../Express/InstanceLoader';
import MiddlewareCallback from '../Middleware/MiddlewareCallback';

/**
 * @class ControllerCallback
 */
class ControllerCallback {
    /**
     * Will instanciate controller class wether from DI or class
     *
     * @param {string} controller
     * @param {{}} additionalData
     * @param {[]} afterMiddlewares
     * @return {Function}
     */
    static call(controller, additionalData, afterMiddlewares) {
        return async (req, res, next) => {
            try {
                const controllerFunction = controller.split(':');
                const controllerAlias = controllerFunction[0];
                const fn = controllerFunction[1];
                const controllerInstance = InstanceLoader.load(controllerAlias);
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

                let afterMiddlewareReturns = {};
                let afterMiddlewareIndex = 0;
                for (const afterMiddleware of afterMiddlewares) {
                    const afterReturn = MiddlewareCallback.callAfter(afterMiddleware, req);
                    let afterReturnedData = null;

                    if (afterReturn instanceof Promise) {
                        afterReturnedData = await afterReturn;
                    } else {
                        afterReturnedData = afterReturn;
                    }
                    afterMiddlewareReturns = {
                        ...afterMiddlewareReturns,
                        [afterMiddlewareIndex]: afterReturnedData,
                    };

                    afterMiddlewareIndex++;
                };
                console.log(afterMiddlewareReturns);
                await ControllerCallback.response(req, res, returnedData, afterMiddlewareReturns);
            } catch (e) {
                Error.create('error', e.stack);

                if (process.env.APP_MODE == 'development') {
                    next(e);
                }

                if (process.env.APP_MODE == 'production') {
                    res.status(500).send('An error has occured, see error.log for detail');
                }
            }
        };
    }

    /**
      *
      * @param {Request} req
      * @param {Response} res
      * @param {ResponseData|View|Redirect} returnedData
      * @param {Response} afterMiddlewareReturns
      */
    static async response(req, res, returnedData, afterMiddlewareReturns = {}) {
        afterMiddlewareReturns = {After: afterMiddlewareReturns};

        if (returnedData == undefined) {
            res.status(400).send('Unexpected Error, Method didnt return anything');
        }

        let response = null;
        if (returnedData instanceof BaseResponse) {
            response = await returnedData.send();
        }

        if (response instanceof ResponseData) {
            res.status(response.code).json({...response.data, ...afterMiddlewareReturns});
        }

        if (returnedData instanceof View) {
            if (returnedData.type == 'html') {
                res.send(returnedData.view);
            }
            if (returnedData.type == 'view') {
                res.render(returnedData.view, {
                    ...returnedData.data,
                    ...afterMiddlewareReturns,
                    ...Template(),
                    ...ConfigView.hook(),
                });
            }
            if (returnedData.type == 'sendFile') {
                res.sendFile(config.sourcePath + '/App/Views/' + returnedData.view);
            }
        }

        if (returnedData instanceof Redirect) {
            res.redirect(returnedData.route);
        }
    }
}

export default ControllerCallback;
