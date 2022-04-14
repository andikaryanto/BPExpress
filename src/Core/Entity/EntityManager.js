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
     * @return {Promise<boolean}>
     */
    async persist(entity, transaction = null) {
        this.setEntity(entity);
        const obj = this.entity;
        const json = await this.createJson(obj);
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
     * @return {Promise<{}>}
     */
    async createJson(entity) {
        return await entity.toJson();
    }

    /**
     * Remove data from database
     * @param {any} transaction
     * @return {boolean}
     */
    async remove(entity, transaction = null) {
        this.setEntity(entity);
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
