import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Jwt from '../../Core/Libraries/Jwt';
import Middleware from '../../Core/Middleware/Middleware';

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
        const request: any = req;
        try {
            if (request.session.token == undefined || request.session.token == null) {
                res.redirect('/office/login');
            } else {
                const token = request.session.token;
                const decoded: any = this.jwt.decode(token, {complete: true});
                const muser = decoded.payload;
                request.user = muser;
                next();
            }
        } catch (e) {
            res.redirect('/office/login');
        }
    }
}

export default WebUserMiddleware;
