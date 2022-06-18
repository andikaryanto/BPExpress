
import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Jwt from '../../Core/Libraries/Jwt';
import Middleware from '../../Core/Middleware/Middleware';

/**
 *
 */
class AuthGraphqlMiddleware extends Middleware {
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
    async hasToken({request}) {
        const token = request.headers.authorization;
        if (token == undefined || token == null) {
            throw new Error('Empty token');
        }

        const decoded = this.#_jwt.decode(token, {complete: true});
        if (decoded) {
            request.user = decoded.payload;
        } else {
            throw new Error('Not authorized or invalid token');
        }
    };
}

export default AuthGraphqlMiddleware;
