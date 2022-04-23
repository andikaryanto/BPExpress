import TestCronDI from '../App/Crons/TestCronDi';
import EntityManager from '../Core/Entity/EntityManager';
import EntityUnit from '../Core/Entity/EntityUnit';

/**
 * @param {ContainerBuilder} container
 */
export default (container) => {
    container.register('cron.testdi', TestCronDI);
};
