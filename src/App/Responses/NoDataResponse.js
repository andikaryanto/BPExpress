import BaseResponse from "./BaseResponse";

class NoDataResponse extends BaseResponse{

    constructor(message, responseCode, data){
        super(message, 204, responseCode, data)
    }
}

export default NoDataResponse;