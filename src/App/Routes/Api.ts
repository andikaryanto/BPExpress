import Routers from '../../Core/Config/Routers';

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

    routers.group('/customer', ['api.middleware'], (routers: Routers) => {
        routers.group('/shop', ['api.middleware'], (routers: Routers) => {
            routers.get('/list', [], 'rest.customer.shop.controller', 'getList');
            routers.get('/:shopId/products', [], 'rest.customer.shop.controller', 'products');
        });
    });

    return routers.getRouter();
};

export default Api;
