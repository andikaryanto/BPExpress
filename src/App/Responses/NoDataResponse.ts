import BaseResponse from '../../Core/Controller/Response';
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
    constructor(message: string, responseCode: {}, data: any) {
        super(message, 204, responseCode, data);
    }
}

export default NoDataResponse;
