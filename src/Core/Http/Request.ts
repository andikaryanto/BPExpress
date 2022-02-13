import UploadedFile from '../Libraries/UploadedFile.js';
import {Response as ExpressResponse, Request as ExpressRequest, NextFunction} from 'express';

/**
 * @class Request
 */
class Request {
    /**
     * @var {Request} instance
     */
    static instance: Request;
    request!: ExpressRequest;


    /**
      *
      */
    constructor() {

    }

    /**
      * @param {ExpressRequest} req
      * @param {ExpressResponse} res
      * @param {NextFunction} next
      */
    static request(req: ExpressRequest, res: ExpressResponse, next: NextFunction): void {
        Request.getInstance().setRequest(req);
        next();
    }

    /**
     *
     * @param {ExpressRequest} req
     * @return {Request}
     */
    setRequest(req: ExpressRequest): Request {
        req = Request.files(req);
        this.request = req;

        return this;
    }

    /**
     *
     * @return {ExpressRequest}
     */
    getRequest(): ExpressRequest {
        return this.request;
    }

    /**
     * Get instance
      * @return {Request}
      */
    static getInstance(): Request {
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
    static files(req: ExpressRequest): ExpressRequest {
    //     req.uploadedFiles = {
    //         key: UploadedFile | UploadedFile[] | undefined,
    //         name: String
    //     };
    //     const files = req.files;

    //     if ( req.files != null && req.files != undefined ) {
    //         for (const [key, value] of Object.entries(files)) {
    //             if (Array.isArray(value)) {
    //                 value.forEach((element) => {
    //                     const uploadedFile = new UploadedFile(element);
    //                     req.uploadedFiles.key.push(uploadedFile);
    //                 });
    //             } else {
    //                 const uploadedFile = new UploadedFile(value);
    //                 req.uploadedFiles[key].push(uploadedFile);
    //             }
    //         }
    //     }

    //     req.getFiles = (name = null) => {
    //         if (name != null) {
    //             const uploaded = req.uploadedFiles.name;
    //             if (uploaded.length > 1) {
    //                 return uploaded;
    //             }
    //             return uploaded[0];
    //         }
    //         return req.uploadedFiles;
    //     };

        return req;
    }
}

export default Request;
