import Routers from '../../Core/Config/Routers';
import GroupuserApi from '../Controllers/Rest/GroupuserApi';
import Shop from '../Controllers/Rest/Customer/Shop';
import UserApi from '../Controllers/Rest/UserApi';
import ApiMiddleware from '../Middlewares/ApiMiddleware';

const Api = () => {
    const routers = new Routers();
    routers.group('/user', [], (routers: Routers) => {
        routers.post('/login', [], 'rest.user.controller', 'login');
        routers.post('/save', [], 'rest.user.controller', 'store');
        routers.put('/update/:Id', [], 'rest.user.controller', 'update');
        routers.get('/list', [], 'rest.user.controller', 'list');
    });

    // routers.group('/groupuser', [], (routers) => {
    //     routers.get('/list', [], GroupuserApi, 'getList').named('groupuser.list');
    // });

    routers.group('/customer', ApiMiddleware, (routers: Routers) => {
        routers.group('/shop', [ ApiMiddleware ], (routers : Routers) => {
            routers.get('/list', [], 'rest.customer.shop.controller', 'getList');
            routers.get('/:shopId/products', [], 'rest.customer.shop.controller', 'products');
        });
    });

    return routers.getRouter();
};

export default Api;
