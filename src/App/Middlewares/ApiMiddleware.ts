import ResponseCode from '../Constants/ResponseCode';
import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const ApiMiddleware = (req: any, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        if (token == undefined || token == null) {
            throw new Error('Cannot verify empty token');
        }

        const decoded = jwt.decode(token, { complete: true });
        if (decoded == null) {
            throw new Error('Invalid Token');
        }

        req.user = decoded.payload;

        next();
    } catch (e: any) {
        const result = {
            Message: e.message,
            Data: null,
            Response: ResponseCode.FAILED_TO_VERIFY,
        };
        res.status(400).json(result);
    }
};

export default ApiMiddleware;
