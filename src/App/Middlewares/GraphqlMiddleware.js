
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import Middleware from '../../Core/Middleware/Middleware';

/**
 *
 */
class GraphqlMiddleware extends Middleware {

    /**
     * 
    * @param {Request} req
    * @param {Response} res
    * @param {NextFunction} next
     */
    async execute(req, res, next) {
        try {
            const token = req.headers.authorization;
            // if (token == undefined || token == null) {
            //     throw new Error('Token anda Kosong');
            // }

            // const decoded = jwt.decode(token, {complete: true});
            // if (decoded == null) {
            //     throw new Error('Invalid Token');
            // }
        } catch (e) {
            req.graphqlError = e;
        }

        next();
    };
}

export default GraphqlMiddleware;
