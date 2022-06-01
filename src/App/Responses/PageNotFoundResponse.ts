import BaseResponse from '../../Core/Controller/Response';
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
    constructor(message: string, responseCode: {}, data: any) {
        super(message, 404, responseCode, data);
    }
}

export default PageNotFoundResponse;
