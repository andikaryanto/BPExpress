import Request from "../Http/Request";

const RequestInstance = async function (err, req, res, next) {
    Request.getInstance().setRequest(req);
    next();
};

export default RequestInstance;
