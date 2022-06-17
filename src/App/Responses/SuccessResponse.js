import BaseResponse from '../../Core/Controller/Response';
/**
 * @class SuccessResponse
 */
class SuccessResponse extends BaseResponse {
    /**
     *
     * @param {string} message
     * @param {[]} responseCode
     * @param {{}} data
     */
    constructor(message, responseCode, data) {
        super(message, 200, responseCode, data);
    }
}

export default SuccessResponse;