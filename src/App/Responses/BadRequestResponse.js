import BaseResponse from "./BaseResponse";

class BadRequestResponse extends BaseResponse{

    constructor(message, responseCode, data){
        super(message, 400, responseCode, data)
    }
}

export default BadRequestResponse;