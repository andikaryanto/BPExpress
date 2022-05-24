import DbTrans from '../Database/DbTrans';
import Entity from './Entity';
import EntityManager from './EntityManager';
import EntityScope from './EntityScope';

/**
 * @class EntityUnit
 */
class EntityUnit {
    /**
     * Prepare entity that will be persisted. Will persisted after entity unit flush
     *
     * @param {Entity} entity
     * @return {EntityUnit}
     */
    preparePersistence(entity: Entity) {
        const enttityScope = EntityScope.getInstance();
        enttityScope.addEntity(EntityScope.PERFORM_ADD_UPDATE, entity);
        return this;
    }

    /**
     * Prepare entity that will be removed. Will removed after entity unit flush
     *
     * @param {Entity} entity
     * @return {EntityUnit}
     */
    prepareRemove(entity: Entity) {
        const enttityScope = EntityScope.getInstance();
        enttityScope.addEntity(EntityScope.PERFORM_DELETE, entity);
        return this;
    }

    /**
     * Persist all entities to table
     *
     * @return {Promise<void>}
     */
    async flush() {
        const entityScope = EntityScope.getInstance();

        const entityManager = new EntityManager();

        const transaction = await DbTrans.beginTransaction();

        const entities = entityScope.getEntities();

        if (entities.length > 0) {
            try {
                for (const value of entities) {
                    if (value.perform == EntityScope.PERFORM_ADD_UPDATE) {
                        await entityManager.persist(value.entity, transaction);
                    } else if (value.perform == EntityScope.PERFORM_DELETE) {
                        await entityManager.remove(value.entity, transaction);
                    }
                }
                await transaction.commit();
                entityScope.clean();
            } catch (e) {
                await transaction.rollback();
                entityScope.clean();
                throw e;
            }
        }
    }
}
export default EntityUnit;
