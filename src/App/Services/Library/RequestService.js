import Request from '../../../Core/Http/Request';


/**
 * @clas RequestService
 */
class RequestService {
    /**
     *
     */
    constructor() {

    }

    /**
     *
     * @param {string} key
     * @return {*}
     */
    getQuery(key = null) {
        const request = Request.getInstance().getRequest();
        if (key == null) {
            returnrequest.query;
        }

        return request.query[key];
    }

    /**
     *
     * @param {string} key
     * @return {#}
     */
    getParams(key) {
        const request = Request.getInstance().getRequest();
        if (key == null) {
            return request.params;
        }

        return request.params[key];
    }

    /**
     *
     * @param {string} key
     * @return {*}
     */
    getBody(key) {
        const request = Request.getInstance().getRequest();
        if (key == null) {
            return request.body;
        }

        return request.body[key];
    }
}

export default RequestService;
