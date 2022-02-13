import {Request, Response as ExpressResponse} from 'express';
/**
 * @clas Response
 */
class Response {
    static instance: Response;
    response: ExpressResponse | undefined;

    /**
      * @param {ExpressResponse} expressResponse
      */
    constructor(expressResponse: ExpressResponse) {
        this.response = expressResponse;
    }

    /**
      * @param {Request} req
      * @param {ExpressResponse} res
      * @param {*} next
      */
    static response(req: Request, res: ExpressResponse, next: any) {
        Response.instance = new Response(res);
        next();
    }

    /**
     * Get instance
      * @return {ExpressResponse}
      */
    static getInstance(): ExpressResponse | undefined {
        // if(this.instance != null)
        return this.instance.response;
        // return this.instance;
    }
}

export default Response;
