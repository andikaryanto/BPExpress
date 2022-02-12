import Request from "../../../Core/Http/Request";


/**
 * @clas RequestService
 */
class RequestService {

    /**
     * 
     */
    constructor(){

    }

    /**
     * 
     * @param {string} key 
     * @returns {any}
     */
    getQuery(key = null){
        let request = Request.getInstance().getRequest();
        if(key == null)
            returnrequest.query;

        return request.query[key];
    }

    /**
     * 
     * @param {string} key 
     * @returns 
     */
    getParams(key){
        let request = Request.getInstance().getRequest();
        if(key == null)
            return request.params;

        return request.params[key];
    }

    /**
     * 
     * @param {string} key 
     * @returns 
     */
    getBody(key){
        let request = Request.getInstance().getRequest();
        if(key == null)
            return request.body;
            
        return request.body[key];
    }

}

export default RequestService;
