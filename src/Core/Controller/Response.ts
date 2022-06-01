import ResponseCode from '../../App/Constants/ResponseCode';
import Collection from '../ViewModel/Collection';
import ViewModel from '../ViewModel/ViewModel';
import ResponseData from './ResponseData';
/**
 * @class BaseResponse
 */
class Response {
    protected message: string;
    protected code: number;
    protected responseCode: ResponseCode;
    protected data: Collection<any>|ViewModel<any>|Array<any>|{};
    protected additionalData = {};

    /**
     *
     * @param {string} message
     * @param {number} code
     * @param {[]} responseCode
     * @param {Collection|ViewModel|Array<any>|{}} data
     */
    constructor(
        message: string, 
        code: number, 
        responseCode: ResponseCode, 
        data:Collection<any>|ViewModel<any>|Array<any>|{}
    ) {
       this.message = message;
       this.code = code;
       this.responseCode = responseCode;
       this.data = data;
    }


    /**
     * Set additional data
     * @param {{}} additionalData
     * @return {Response}
     */
    setAdditionalData(additionalData: {}) {
       this.additionalData = additionalData;
        return this;
    }

    /**
     * Send object data
     * @return {ResponseData}
     */
    async send() {
        return ResponseData.status(this.code).json(await this.getResult());
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

        if (this.data instanceof Collection) {
            const strPage: any = this.data.getPage()?.toString();
            const strSize: any = this.data.getSize()?.toString();
            const strTotal: any = this.data.getTotal()?.toString();
            page = this.data.getPage() != null ? parseInt(strPage) : null;
            size =this.data.getSize() != null ? parseInt(strSize) : null;
            total =this.data.getTotal() != null ? parseInt(strTotal) : null;
            data = await this.data.proceedAndGetData();
        } else if (this.data instanceof ViewModel) {
            data = await this.data.toJson();
        } else {
            data =this.data;
        }

        let result: any = {
            Data: data,
            Code:this.responseCode,
            Message:this.message,
            AdditionalData:this.additionalData
        };

        if (this.data instanceof Collection) {
            result.Page = page;
            result.Size = size;
            result.Total= total;
        }

        return result;
    }

    /**
     * Get status code
     * @return {int}
     */
    getStatusCode() {
        return this.code;
    }
}

export default Response;
