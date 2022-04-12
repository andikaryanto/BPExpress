import Db from '../Database/Connection/DbConnection.js';
import ORM from '../Database/ORM.js';
import Entity from './Entity';

/**
 * @class EntityManager
 */
class EntityManager {
    db;
    entity;

    /**
     *
     */
    constructor() {
    }

    /**
     * Set entity
     * @param {Entity} entity
     * @return {EntityManager}
     */
    setEntity(entity) {
        this.entity = entity;
        return this;
    }

    /**
     * Store data to storage / database
     * @param {any} transaction
     * @return {boolean}
     */
    async persist(transaction = null) {
        const obj = this.entity;
        const json = this.createJson(obj);
        const primaryKey = obj.constructor.getPrimaryKey();
        const table = obj.constructor.getTable();
        let result = null;
        const getPrimaryKey = 'get' + primaryKey;
        if (obj[getPrimaryKey]() == null) {
            if (transaction != null) {
                result = Db.transacting(transaction).into(table).insert(json);
            } else {
                result = Db.into(table).insert(json);
            }
            const id = await result;
            const setPrimaryKey = 'set' + primaryKey;
            obj[setPrimaryKey](id[0]);
            if (id[0] > 0) {
                return true;
            }
            return false;
        } else {
            if (transaction != null) {
                result = Db.table(table).transacting(transaction).where(primaryKey, obj[getPrimaryKey]()).update(json);
            } else {
                result = Db.table(table).where(primaryKey, obj[primaryKey]).update(json);
            }

            await result;
            return true;
        }
    }

    /**
     * Json data before persisted
     * @param {Entity} entity
     * @return {{}}
     */
    createJson(entity) {
        const object = {};
        const getProps = ORM.getProps(entity.constructor.name);
        for (const [key, value] of Object.entries(getProps)) {
            const getProp = 'get' + key;
            const propValue = entity[getProp]();
            if (value.isPrimitive) {
                object[key] = propValue;
            } else {
                const related = propValue;
                const primaryKey = ORM.getPrimaryKey(related.constructor.name);
                const getPrimary = 'get' + primaryKey;
                const pkValue = related[getPrimary]();
                object[value.foreignKey] = pkValue;
            }
        }
        return object;
    }

    /**
     * Remove data from database
     * @param {any} transaction
     * @return {boolean}
     */
    async remove(transaction = null) {
        const obj = this.entity;
        const primaryKey = obj.constructor.getPrimaryKey();
        const table = obj.constructor.getTable();
        let ret = null;
        const getPrimaryKey = 'get' + primaryKey;
        if (transaction != null) {
            ret = await Db.transacting(transaction).table(table).where(primaryKey, obj[getPrimaryKey]()).del();
        } else {
            ret = await Db.table(table).where(primaryKey, obj[getPrimaryKey]()).del();
        }
        if (ret > 0) {
            return true;
        }
        return false;
    }
}

export default EntityManager;