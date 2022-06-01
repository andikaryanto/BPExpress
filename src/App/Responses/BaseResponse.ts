import ResponseData from '../../Core/Controller/ResponseData';
/**
 * @class BaseResponse
 */
class BaseResponse {
    protected message: string;
    protected code: number;
    protected responseCode: {};
    protected data: {};
    /**
     *
     * @param {string} message
     * @param {number} code
     * @param {[]} responseCode
     * @param {{}} data
     */
    constructor(message: string, code: number, responseCode: {}, data: {}) {
        this.message = message;
        this.code = code;
        this.responseCode = responseCode;
        this.data = data;
    }

    /**
     * Send object data
     * @return {ResponseData}
     */
    send() {
        const result = {
            Message: this.message,
            Data: this.data,
            Response: this.responseCode,
        };

        return ResponseData.status(this.code).json(result);
    }
}

export default BaseResponse;
