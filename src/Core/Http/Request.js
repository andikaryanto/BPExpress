import UploadedFile from '../Libraries/UploadedFile.js';
import {Response as ExpressResponse, Request as ExpressRequest} from 'express';

/**
 * @class Request
 */
class Request {
    /**
     * @var {Request} instance
     */
    static instance = null;
    request = null;


    /**
      *
      */
    constructor() {

    }

    /**
      * @param {ExpressRequest} req
      * @param {ExpressResponse} res
      * @param {*} next
      */
    static request(req, res, next) {
        Request.getInstance().setRequest(req);
        next();
    }

    /**
     *
     * @param {*} req
     * @return {Request}
     */
    setRequest(req) {
        req = Request.files(req);
        Request.resource(req);
        return this;
    }

    /**
     *
     * @param {any} req
     */
    static resource(req) {
        req.resource = null;
        req.setResource = (resource) => {
            req.resource = resource;
        };

        req.getResource = () => {
            return req.resource;
        };

        this.request = req;
    }

    /**
     *
     * @return {{}}
     */
    getRequest() {
        return this.request;
    }

    /**
     * Get instance
      * @return {ExpressRequest}
      */
    static getInstance() {
        if (this.instance == null) {
            this.instance = new this;
        }

        return this.instance;
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
