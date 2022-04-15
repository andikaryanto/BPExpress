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
    #_jwt;

    /**
     *
     * @param {Jwt} jwt
     */
    constructor(
        jwt,
    ) {
        super();
        this.#_jwt = jwt;
    }

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async execute(req, res, next) {
        try {
            if (req.session.token == undefined || req.session.token == null) {
                res.redirect('/office/login');
            } else {
                const token = req.session.token;
                const decoded = this.#_jwt.decode(token, {complete: true});
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
