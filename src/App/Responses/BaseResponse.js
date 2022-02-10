import ResponseData from '../../Core/Controller/ResponseData';
/**
 * @class BaseResponse
 */
class BaseResponse {
    #_message = null;
    #_code = null;
    #_responseCode = null;
    #_data = null;
    /**
     *
     * @param {string} message
     * @param {number} code
     * @param {[]} responseCode
     * @param {{}} data
     */
    constructor(message, code, responseCode, data) {
        this.#_message = message;
        this.#_code = code;
        this.#_responseCode = responseCode;
        this.#_data = data;
    }

    /**
     * Send object data
     * @return {ResponseData}
     */
    send() {
        const result = {
            Message: this.#_message,
            Data: this.#_data,
            Response: this.#_responseCode,
        };

        return ResponseData.status(this.#_code).json(result);
    }
}

export default BaseResponse;
