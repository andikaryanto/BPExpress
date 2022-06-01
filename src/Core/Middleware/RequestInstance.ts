import Request from '../Http/Request';

const RequestInstance = async function(err: any, req: any, res: any, next: any) {
    Request.getInstance().setRequest(req);
    next();
};

export default RequestInstance;
