import Collection from '../ViewModel/Collection';
import ViewModel from '../ViewModel/ViewModel';
import ResponseData from './ResponseData';
/**
 * @class BaseResponse
 */
class Response {
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
    async send() {
        return ResponseData.status(this.#_code).json(await this.getResult());
    }

    /**
     * get result body
     * @return {{}}
     */
    async getResult() {
        let data = null;
        let page = null;
        let size = null;
        if(this.#_data instanceof Collection){
            page = this.#_data.getPage();
            size = this.#_data.getSize();
            data = await this.#_data.proceedAndGetData()
        }
        
        if(this.#_data instanceof ViewModel)
            data = await this.#_data.toJson()
        
        const result = {
            Message: this.#_message,
            Page: page,
            Size: size,
            Data: data,
            Code: this.#_responseCode,
        };

        return result;
    }

    /**
     * Get status code
     * @return {int}
     */
    getStatusCode() {
        return this.#_code;
    }
}

export default Response;
