import BaseResponse from '../../Core/Controller/Response';
import ResponseCode from '../Constants/ResponseCode';
/**
 * @class BadRequestResponse
 */
class BadRequestResponse extends BaseResponse {
    /**
     *
     * @param {string} message
     * @param {{}} responseCode
     * @param {{}} data
     */
    constructor(message: string, responseCode: {}, data: any) {
        super(message, 400, responseCode, data);
    }
}

export default BadRequestResponse;
