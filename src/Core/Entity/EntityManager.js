import ORM from '../Database/ORM';
import Db from '../Database/Connection/DbConnection.js';

/**
 * @class EntityManager
 */
class EntityManager {
    entity;
    db;

    /**
     *
     * @param {*} entity
     */
    constructor(entity) {
        this.entity = entity;
        this.db = Db.table(this.getTable());
    }

    /**
     * Get all props name
     * @return {[]}
     */
    getProps() {
        return ORM.getProps(this.entity.constructor.name);
    }

    /**
     * get Table Name
     * @return {string}
     */
    getTable() {
        return ORM.getTable(this.entity.constructor.name);
    }
}

export default EntityManager;
