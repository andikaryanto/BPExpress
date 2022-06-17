import ResponseCode from '../Constants/ResponseCode.js';
import jwt from 'jsonwebtoken';
import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Middleware from '../../Core/Middleware/Middleware.js';

/**
 *
 */
class ApiMiddleware extends Middleware {
    /**
    * @param {Request} req
    * @param {Response} res
    * @param {NextFunction} next
    * @return {void}
     */
    async hasToken(req, res, next) {
        try {
            const token = req.headers.authorization;
            if (token == undefined || token == null) {
                throw new Error('Cannot verify empty token');
            }

            const decoded = jwt.decode(token, {complete: true});
            if (decoded == null) {
                throw new Error('Invalid Token');
            }

            req.user = decoded.payload;

            next();
        } catch (e) {
            const result = {
                Message: e.message,
                Data: null,
                Response: ResponseCode.FAILED_TO_VERIFY,
            };
            res.status(400).json(result);
        }
    }
};

export default ApiMiddleware;
