/**
 * @class ResponseData
 */
class ResponseData {
    private static instance: ResponseData;
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
    static getInstance(): ResponseData {
        if (this.instance == null) {
            this.instance = new this;
        }
        return this.instance;
    }

    /**
      *
      * @param {number} code
      * @return {ResponseData}
      */
    static status(code: number): ResponseData {
        const instance = ResponseData.getInstance();
        instance.code = code;
        return instance;
    }

    /**
      *
      * @param {{}} data
      * @return {ResponseData}
      */
    json(data: {}): ResponseData {
        this.data = data;
        return this;
    }
}

export default ResponseData;
