import BaseResponse from '../../Core/Controller/Response';
/**
 * @class ForbiddenResponse
 */
class ForbiddenResponse extends BaseResponse {
    /**
     *
     * @param {string} message
     * @param {[]} responseCode
     * @param {{}} data
     */
    constructor(message, responseCode, data) {
        super(message, 403, responseCode, data);
    }
}

export default ForbiddenResponse;
