import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';

/**
 *
 * @param {any} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const GraphqlMiddleware = function(req: any, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization;
        if (token == undefined || token == null) {
            throw new Error('Token anda Kosong');
        }

        const decoded = jwt.decode(token, {complete: true});
        if (decoded == null) {
            throw new Error('Invalid Token');
        }
    } catch (e) {
        req.graphqlError = e;
    }

    next();
};

export default GraphqlMiddleware;
