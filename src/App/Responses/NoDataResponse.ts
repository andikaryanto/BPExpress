import BaseResponse from './BaseResponse';
/**
 * @class NoDataResponse
 */
class NoDataResponse extends BaseResponse {
    /**
     *
     * @param {string} message
     * @param {[]} responseCode
     * @param {{}} data
     */
    constructor(message, responseCode, data) {
        super(message, 204, responseCode, data);
    }
}

export default NoDataResponse;
