import { Reference } from 'node-dependency-injection';
import TestCronDi from '../App/Crons/TestCronDi';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('cron.testdi', TestCronDi)
        .addArgument(new Reference('groupuser.respository'));
};
