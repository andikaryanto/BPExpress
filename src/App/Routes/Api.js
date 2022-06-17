import Routers from '../../Core/Route/Routers.js';

const Api = () => {
    const routers = new Routers();
    routers.group('/user', (routers) => {
        routers.post('/login', 'rest.user.controller:login');
        routers.post('/save', 'rest.user.controller:store');
        routers.put('/update/:Id', 'rest.user.controller:update');
        routers.get('/list', 'rest.user.controller:list');
    });

    // routers.group('/groupuser', [], (routers) => {
    //     routers.get('/list', [], GroupuserApi, 'getList').named('groupuser.list');
    // });

    routers.group('/customer', (routers) => {
        routers.group('/shop', (routers) => {
            routers.get('/list', 'rest.customer.shop.controller:getList')
                .before('api.middleware:hasToken')
                .after('after.middleware:anyData');

            routers.get('/:shopId/products', 'rest.customer.shop.controller:products')
                .before('api.middleware:hasToken')
                .after('after.middleware:anyData');
        });
    });

    return routers;
};

export default Api;
