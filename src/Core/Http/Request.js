import UploadedFile from '../Libraries/UploadedFile.js';
import {Response as ExpressResponse, Request as ExpressRequest} from 'express';

/**
 * @class Request
 */
class Request {
    static instance = null;
    request = null;


    /**
      * @param {ExpressRequest} expressRequest
      */
    constructor(expressRequest) {
        this.request = expressRequest;
    }

    /**
      * @param {ExpressRequest} req
      * @param {ExpressResponse} res
      * @param {*} next
      */
    static request(req, res, next) {
        // if (Request.instance == null)
        req = Request.files(req);
        Request.instance = new Request(req);
        next();
    }

    /**
     * Get instance
      * @return {ExpressRequest}
      */
    static getInstance() {
        // if(this.instance != null)
        return this.instance.request;
        // return this.instance;
    }

    /**
     *
     * @param {ExpressRequest} req
     * @return {ExpressRequest}
     */
    static files(req) {
        req.uploadedFiles = {};
        const files = req.files;

        if ( req.files != null && req.files != undefined ) {
            for (const [key, value] of Object.entries(files)) {
                req.uploadedFiles[key] = [];
                if (Array.isArray(value)) {
                    value.forEach((element) => {
                        const uploadedFile = new UploadedFile(element);
                        req.uploadedFiles[key].push(uploadedFile);
                    });
                } else {
                    const uploadedFile = new UploadedFile(value);
                    req.uploadedFiles[key].push(uploadedFile);
                }
            }
        }

        req.getFiles = (name = null) => {
            if (name != null) {
                const uploaded = req.uploadedFiles[name];
                if (uploaded.length > 1) {
                    return uploaded;
                }
                return uploaded[0];
            }

            return req.uploadedFiles;
        };

        return req;
    }
}

export default Request;
