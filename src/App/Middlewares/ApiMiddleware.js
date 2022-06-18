import ResponseCode from '../Constants/ResponseCode.js';
import jwt from 'jsonwebtoken';
import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Middleware from '../../Core/Middleware/Middleware.js';

/**
 *
 */
class ApiMiddleware extends Middleware {
    /**
     *
     * @param {*} param0
     */
    async hasToken({request, response, next}) {
        try {
            const token = request.headers.authorization;
            if (token == undefined || token == null) {
                throw new Error('Cannot verify empty token');
            }

            const decoded = jwt.decode(token, {complete: true});
            if (decoded == null) {
                throw new Error('Invalid Token');
            }

            request.user = decoded.payload;

            next();
        } catch (e) {
            const result = {
                Message: e.message,
                Data: null,
                Response: ResponseCode.FAILED_TO_VERIFY,
            };
            response.status(400).json(result);
        }
    }
};

export default ApiMiddleware;
