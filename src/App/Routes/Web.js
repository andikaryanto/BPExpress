import Routers from '../../Core/Config/Routers.js';
import LoginController from '../Controllers/Office/LoginController.js';
import MgroupuserController from '../Controllers/Office/MgroupuserController.js';
import MuserController from '../Controllers/Office/MuserController.js';
import TestController from '../Controllers/TestController.js';
import OfficeMiddleware from '../Middlewares/OfficeMiddleware.js';

const Web = () => {
    const routers = new Routers();

    // routers.get('/', [], LoginController, 'index');
    routers.get('/test', [], 'web.test.controller', 'index').named('named.test');
    routers.get('/test/store', [], 'web.test.controller', 'store');
    routers.get('/test/update', [], 'web.test.controller', 'update');
    routers.get('/test/remove', [], 'web.test.controller', 'destroy');
    routers.get('/test2', [], 'web.test2.controller', 'index');
    routers.get('/test2/store', [], 'web.test2.controller', 'store');
    routers.get('/test2/update', [], 'web.test2.controller', 'update');
    routers.get('/test2/remove', [], 'web.test2.controller', 'destroy');
    // routers.post('/test/formpost', [], TestController, 'formPost');
    // routers.get('/test/params/:Id/:No', [], TestController, 'param');

    routers.get('/office', [], 'web.office-login.controller', 'index');
    routers.get('/office/login', [], 'web.office-login.controller', 'index');
    routers.post('/office/dologin', [], 'web.office-login.controller', 'doLogin');
    routers.get('/office/dologout', [], 'web.office-login.controller', 'doLogout');

    // routers.group('/office', [OfficeMiddleware], (routers) => {
    //     routers.group('/mgroupuser', [], (routers) => {
    //         routers.get('', [], MgroupuserController, 'index');
    //         routers.get(
    //             '/:Id/edit',
    //             [],
    //             MgroupuserController,
    //             'getById',
    //             {routedata: 'This data is sent from routing'},
    //         );
    //         routers.post('/getalldata', [], MgroupuserController, 'getAllData');
    //         routers.group('/data', [], function(routers) {
    //             routers.get('/list', [], MgroupuserController, 'list');
    //         });
    //     });

    //     routers.group('/muser', [], (routers) => {
    //         routers.get('', [], MuserController, 'index');
    //         routers.post('/getalldata', [], MuserController, 'getAllData');
    //     });
    // });

    // routers.group('/customer', [], function(routers) {
    //     routers.get('', [], MuserController, 'index');
    // });

    // routers.get('/container', [], TestController, 'index');
    return routers.getRouter();
};

export default Web;
