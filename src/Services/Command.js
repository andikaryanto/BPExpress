import {Reference} from 'node-dependency-injection';
import CreateUser from '../App/Commands/CreateUser';
import TestCronDi from '../App/Crons/TestCronDi';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('create-user.command', CreateUser)
        .addArgument(new Reference('user.service'));
};
