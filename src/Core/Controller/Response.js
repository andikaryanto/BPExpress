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
    #_additionalData = null;

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
     * Set additional data
     * @param {{}} additionalData 
     */
    setAdditionalData(additionalData){
        this.#_additionalData = additionalData;
        return this;
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
        let total = null;

        if (this.#_data instanceof Collection) {
            page = parseInt(this.#_data.getPage());
            size = parseInt(this.#_data.getSize());
            total = parseInt(this.#_data.getTotal());
            data = await this.#_data.proceedAndGetData();
        } else if (this.#_data instanceof ViewModel) {
            data = await this.#_data.toJson();
        } else {
            data = this.#_data;
        }

        let result = {
            Data: data,
            Code: this.#_responseCode,
            Message: this.#_message,
            AdditionalData: this.#_additionalData
        };

        if (this.#_data instanceof Collection) {
            result = {
                Page: page,
                Size: size,
                Total: total,
                ...result,
            };
        }

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
