import dotenv from 'dotenv';
import {  NextFunction, Request, Response } from 'express';
dotenv.config();

const VerifyCsrf = async function(err: any,  req: Request, res: Response, next: NextFunction) {
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
};

export default VerifyCsrf;
