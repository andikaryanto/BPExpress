import {ContainerBuilder, Reference} from 'node-dependency-injection';
import EntityManager from '../Core/Entity/EntityManager';
import EntityUnit from '../Core/Entity/EntityUnit';

/**
 * @param {ContainerBuilder} container
 */
export default (container: ContainerBuilder) => {
    container.register('entity-manager', EntityManager);
    container.register('entity-unit', EntityUnit);
};
