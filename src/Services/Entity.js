import EntityManager from "../Core/Entity/EntityManager";

/**
 * @param {ContainerBuilder} container
 */
 export default (container) => {
    container.register('entity-manager', EntityManager);
 };