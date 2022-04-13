import BaseResponse from '../../Core/Controller/Response';
/**
 * @class BadRequestResponse
 */
class BadRequestResponse extends BaseResponse {
    /**
     *
     * @param {string} message
     * @param {[]} responseCode
     * @param {{}} data
     */
    constructor(message, responseCode, data) {
        super(message, 400, responseCode, data);
    }
}

export default BadRequestResponse;
