import BaseResponse from './BaseResponse';
/**
 * @class PageNotFoundResponse
 */
class PageNotFoundResponse extends BaseResponse {
    /**
     *
     * @param {string} message
     * @param {[]} responseCode
     * @param {{}} data
     */
    constructor(message, responseCode, data) {
        super(message, 404, responseCode, data);
    }
}

export default PageNotFoundResponse;
