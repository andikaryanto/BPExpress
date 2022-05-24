import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Jwt from '../../Core/Libraries/Jwt';
import Middleware from '../../Core/Middleware/Middleware';

/**
 * @class OfficeMiddleware
 */
class OfficeMiddleware extends Middleware {
    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async execute(req: Request, res: Response, next: NextFunction) {
        next();
    }
}

export default OfficeMiddleware;
