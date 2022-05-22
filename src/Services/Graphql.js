import {Reference} from 'node-dependency-injection';
import UserAdd from '../App/Graphql/Resolvers/Mutation/UserAdd';
import UserLogin from '../App/Graphql/Resolvers/Mutation/UserLogin';
import GetAllShopProducts from '../App/Graphql/Resolvers/Query/GetAllShopProducts';
import GetAllUsers from '../App/Graphql/Resolvers/Query/GetAllUsers';
import GetGroupuserById from '../App/Graphql/Resolvers/Query/GetGroupuserById';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('getAllUser.graphql', GetAllUsers)
        .addArgument(new Reference('user.repository'));

    container.register('getAllShopProducts.graphql', GetAllShopProducts)
        .addArgument(new Reference('shop.service'));

    container.register('getGroupuserById.graphql', GetGroupuserById)
        .addArgument(new Reference('groupuser.repository'));

    container.register('userAdd.graphql', UserAdd);

    container.register('userLogin.graphql', UserLogin)
        .addArgument(new Reference('user.service'));
};
