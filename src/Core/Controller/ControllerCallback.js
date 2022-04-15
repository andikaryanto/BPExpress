import Routers from "../Config/Routers";
import Container from "../Container/Container";
import Error from "../Logger/Error";


class ControllerCallback {

    /**
     * Will instanciate controller class wether from DI or class
     * 
     * @param {string} controller 
     * @param {string} fn 
     * @param {{}} additionalData 
     * @param {Routers.response} routersResponse 
     * @return {Function}
     */
    static call(controller, fn, additionalData, routersResponse) {

        return async (req, res, next) => {

            try {
                let controllerInstance = null
                if(typeof controller == 'string'){
                    const container = Container.getInstance().get(controller);
                    controllerInstance = container;
                } else {
                    controllerInstance = new controller();
                }
                const data = controllerInstance[fn](
                    {
                        request: req,
                        session: req.session,
                        params: req.params,
                        query: req.query,
                        body: req.body,
                        ...additionalData,
                    },
                );

                let returnedData = null;
                if (data instanceof Promise) {
                    returnedData = await data;
                } else {
                    returnedData = data;
                }
                await routersResponse(req, res, returnedData);
            } catch (e) {
                Error.create('error', e.stack);

                if (process.env.APP_MODE == 'development') {
                    next(e);
                }

                if (process.env.APP_MODE == 'production') {
                    res.status(500).send('An error has occured, see error.log for detail');
                }
            }
        };
    }
}

export default ControllerCallback;