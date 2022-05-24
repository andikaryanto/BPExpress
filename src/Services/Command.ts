import {ContainerBuilder, Reference} from 'node-dependency-injection';
import CreateUser from '../App/Commands/CreateUser';
import TestCronDi from '../App/Crons/TestCronDi';

/**
 * @param {ContainerBuilder} container
 */
export default (container: ContainerBuilder) => {
    container.register('create-user.command', CreateUser)
        .addArgument(new Reference('user.service'));
};
