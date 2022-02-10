import {Request, Response as ExpressResponse} from 'express';
/**
 * @clas Response
 */
class Response {
    static instance = null;
    response = null;

    /**
      * @param {ExpressResponse} expressResponse
      */
    constructor(expressResponse) {
        this.response = expressResponse;
    }

    /**
      * @param {Request} req
      * @param {ExpressResponse} res
      * @param {*} next
      */
    static response(req, res, next) {
        Response.instance = new Response(res);
        next();
    }

    /**
     * Get instance
      * @return {ExpressResponse}
      */
    static getInstance() {
        // if(this.instance != null)
        return this.instance.response;
        // return this.instance;
    }
}

export default Response;
