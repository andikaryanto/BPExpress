import dotenv from 'dotenv';
import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Middleware from './Middleware';
dotenv.config();


/**
 *
 */
class VerifyCsrf extends Middleware {
    /**
    * @param {Request} req
    * @param {Response} res
    * @param {NextFunction} next
     */
    async execute(req, res, next) {
        const isApi = req.originalUrl.split('/')[1] == 'api';
        if (process.env.CSRF_USAGE == 'true' && !isApi) {
            if (err.code == 'EBADCSRFTOKEN') {
                res.send('Invalid CSRF Token');
            } else {
                next();
            }
        } else {
            next();
        }
    }
};

export default VerifyCsrf;
