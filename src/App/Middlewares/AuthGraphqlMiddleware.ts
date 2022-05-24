
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

        const decoded = this.jwt.decode(token, {complete: true});
        if(decoded){
            req.user = decoded.payload;
        } else {
            throw new Error('Not authorized or invalid token');
        }
    };
}

export default AuthGraphqlMiddleware;
