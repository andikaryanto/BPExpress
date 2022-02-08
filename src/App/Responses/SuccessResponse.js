import BaseResponse from "./BaseResponse";

class SuccessResponse extends BaseResponse{

    constructor(message, responseCode, data){
        super(message, 200, responseCode, data)
    }
}

export default SuccessResponse;