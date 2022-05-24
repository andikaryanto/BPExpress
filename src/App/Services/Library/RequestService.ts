import QueryString from 'qs';
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
     * @param {string|null} key
     * @return {QueryString.ParsedQs|string|any}
     */
    getQuery(key: string|null = null) {
        const request = Request.getInstance().getRequest();
        if (key == null) {
            return request.query;
        }

        return request.query[key];
    }

    /**
     *
     * @param {string} key
     * @return {QueryString.ParsedQs|string|any}
     */
    getParams(key: string|null) {
        const request = Request.getInstance().getRequest();
        if (key == null) {
            return request.params;
        }

        return request.params[key];
    }

    /**
     *
     * @param {string} key
     * @return {QueryString.ParsedQs|string}
     */
    getBody(key: string|null) {
        const request = Request.getInstance().getRequest();
        if (key == null) {
            return request.body;
        }

        return request.body[key];
    }
}

export default RequestService;
