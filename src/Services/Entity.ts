import {ContainerBuilder, Reference} from 'node-dependency-injection';
import EntityUnit from '../Core/Entity/EntityUnit';

/**
 * @param {ContainerBuilder} container
 */
export default (container: ContainerBuilder) => {
    container.register('entity-manager', EntityManager);
    container.register('entity-unit', EntityUnit);
};
