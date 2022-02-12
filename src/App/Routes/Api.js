import Routers from '../../Core/Config/Routers.js';
import GroupuserApi from '../Controllers/Rest/GroupuserApi.js';
import Shop from '../Controllers/Rest/Customer/Shop.js';
import UserApi from '../Controllers/Rest/UserApi.js';
import ApiMiddleware from '../Middlewares/ApiMiddleware.js';

const Api = () => {
    const routers = new Routers();
    routers.group('/user', [], (routers) => {
        routers.post('/login', [], 'rest.user.controller', 'login');
        routers.post('/save', [], 'rest.user.controller', 'store');
        routers.put('/update/:Id', [], 'rest.user.controller', 'update');
        routers.get('/list', [], 'rest.user.controller', 'list');
    });

    // routers.group('/groupuser', [], (routers) => {
    //     routers.get('/list', [], GroupuserApi, 'getList').named('groupuser.list');
    // });

    routers.group('/customer', [ApiMiddleware], (routers) => {
        routers.group('/shop', [ApiMiddleware], (routers) => {
            routers.get('/list', [], 'rest.customer.shop.controller', 'getList');
            routers.get('/:shopId/products', [], 'rest.customer.shop.controller', 'products');
        });
    });

    return routers.getRouter();
};

export default Api;
