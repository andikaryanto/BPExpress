import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Jwt from '../../Core/Libraries/Jwt.js';
import Middleware from '../../Core/Middleware/Middleware.js';

/**
 * @class OfficeMiddleware
 */
class WebUserMiddleware extends Middleware {
    /**
     * @var {Jwt}
     */
    protected jwt: Jwt;

    /**
     *
     * @param {Jwt} jwt
     */
    constructor(
        jwt: Jwt,
    ) {
        super();
        this.jwt = jwt;
    }

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.session.token == undefined || req.session.token == null) {
                res.redirect('/office/login');
            } else {
                const token = req.session.token;
                const decoded = this.jwt.decode(token, {complete: true});
                const muser = decoded.payload;
                req.user = muser;
                next();
            }
        } catch (e) {
            res.redirect('/office/login');
        }
    }
}

export default WebUserMiddleware;
