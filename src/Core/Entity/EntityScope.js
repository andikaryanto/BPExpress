import Entity from './Entity';

/**
 * @class EntityScope
 */
class EntityScope {
    static PERFORM_ADD_UPDATE = '1addUpdate';
    static PERFORM_DELETE = '2delete';

    /**
     *
     * @var {EntityScope|null}
     */
    static instance = null;

    /**
     *
     * @var {[]}
     */
    entities = [];

    /**
     *
     */
    constructor() {
    }

    /**
     *
     * @return {EntityScope}
     */
    static getInstance() {
        if (EntityScope.instance == null) {
            EntityScope.instance = new this;
        }
        return EntityScope.instance;
    }

    /**
     * Add entity that will be persisted
     *
     * @param {string} perform
     * @param {Entity} entity
     * @return {void}
     */
    addEntity(perform, entity) {
        let isEntityExist = false;
        // if (this.entities) {
        for (const existedEntity of this.entities) {
            if (entity === existedEntity['entity'] && perform === entity['perform']) {
                isEntityExist = true;
                break;
            }
        }
        // }

        if (!isEntityExist) {
            this.entities.push({
                perform,
                entity,
            });
        }
    }

    /**
     * Get entities scope
     *
     * @return {[]}
     */
    getEntities() {
        return this.entities;
    }

    /**
     * Clean entity scope
     *
     * @return {void}
     */
    clean() {
        this.entities = [];
    }
}

export default EntityScope;
