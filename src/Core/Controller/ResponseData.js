/**
 * @class ResponseData
 */
class ResponseData {
    static #_instance = null;
    code = 200;
    data = {};

    /**
     *
     */
    constructor() {

    }

    /**
      *
      * @return {ResponseData}
      */
    static getInstance() {
        if (this.#_instance == null);
        this.#_instance = new this;
        return this.#_instance;
    }

    /**
      *
      * @param {number} code
      * @return {ResponseData}
      */
    static status(code) {
        const instance = ResponseData.getInstance();
        instance.code = code;
        return instance;
    }

    /**
      *
      * @param {{}} data
      * @return {ResponseData}
      */
    json(data) {
        this.data = data;
        return this;
    }
}

export default ResponseData;
