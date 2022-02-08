import BaseResponse from "./BaseResponse";

class PageNotFoundResponse extends BaseResponse{

    constructor(message, responseCode, data){
        super(message, 404, responseCode, data)
    }
}

export default PageNotFoundResponse;