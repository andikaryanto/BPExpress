
import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import { JwtPayload } from 'jsonwebtoken';
import Jwt from '../../Core/Libraries/Jwt';
import Middleware from '../../Core/Middleware/Middleware';

/**
 *
 */
class AuthGraphqlMiddleware extends Middleware {

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
     */
    async execute(req: Request, res: Response) {
        const token = req.headers.authorization;
        if (token == undefined || token == null) {
            throw new Error('Empty token');
        }

        const decoded: any = this.jwt.decode(token, {complete: true});

        if(decoded == null){
            throw new Error('Not authorized or invalid token');
        }

        Object.assign(req, {
            user: decoded.payload
        });

    };
}

export default AuthGraphqlMiddleware;
