import BaseResponse from "./BaseResponse";

class ForbiddenResponse extends BaseResponse{

    constructor(message, responseCode, data){
        super(message, 403, responseCode, data)
    }
}

export default ForbiddenResponse;