import Entity from './Entity';

/**
 * @class EntityScope
 */
class EntityScope {
    static PERFORM_ADD_UPDATE = '1addUpdate';
    static PERFORM_DELETE = '2delete';

    /**
     *
     * @var {EntityScope}
     */
    static instance: EntityScope;

    /**
     *
     * @var {Array<any>}
     */
    protected entities = Array<any>();

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
     * @param {any} entity
     * @return {void}
     */
    addEntity(perform: string, entity: any) {
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
