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
     * @param {*} param0
     */
    async isUserLoggedIn({request, response, params}) {
        try {
            if (request.session.token == undefined || request.session.token == null) {
                response.redirect('/office/login');
            } else {
                const token = request.session.token;
                const decoded = this.#_jwt.decode(token, {complete: true});
                const muser = decoded.payload;
                request.user = muser;
                next();
            }
        } catch (e) {
            response.redirect('/office/login');
        }
    }
}

export default WebUserMiddleware;
