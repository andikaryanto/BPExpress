import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Jwt from '../../Core/Libraries/Jwt.js';
import Middleware from '../../Core/Middleware/Middleware.js';

/**
 * @class OfficeMiddleware
 */
class OfficeMiddleware extends Middleware {
    /**
     *
     * @param {*} param0
     */
    async execute({next}) {
        next();
    }
}

export default OfficeMiddleware;
