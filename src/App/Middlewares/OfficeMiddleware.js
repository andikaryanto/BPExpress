import {Request, Response, NextFunction} from 'express';
import Jwt from '../../Core/Libraries/Jwt.js';
import Middleware from '../../Core/Middleware/Middleware.js';

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
    async execute(req, res, next){
        next();
    }

}

export default OfficeMiddleware;
