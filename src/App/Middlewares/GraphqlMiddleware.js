
import {ErrorRequestHandler, Request, Response, NextFunction} from 'express';
import Middleware from '../../Core/Middleware/Middleware';

/**
 *
 */
class GraphqlMiddleware extends Middleware {
    /**
     *
     * @param {*} param0
     */
    async execute({request, next}) {
        try {
            const token = request.headers.authorization;
            // if (token == undefined || token == null) {
            //     throw new Error('Token anda Kosong');
            // }

            // const decoded = jwt.decode(token, {complete: true});
            // if (decoded == null) {
            //     throw new Error('Invalid Token');
            // }
        } catch (e) {
            request.graphqlError = e;
        }

        next();
    };
}

export default GraphqlMiddleware;
