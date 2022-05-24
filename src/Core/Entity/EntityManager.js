import Validator from 'validatorjs';
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
     *
     * @param {Entity} entity
     * @param {any} transaction
     * @throws {Error}
     * @return {Promise<boolean>}
     */
    async persist(entity, transaction = null) {
        this.setEntity(entity);
        const obj = this.entity;
        const json = await this.createJson(obj);

        this.validate(json);

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
     * @param {Entity} entity
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

    /**
     * Validate Entity
     * @param {{}} object
     * @return {EntityManager}
     */
    validate(object) {
        const rules = this.entity.getRules();
        const validation = new Validator(object, rules);
        if (validation.fails()) {
            for (const [key, value] of Object.entries(validation.errors.errors)) {
                throw new Error(value[0]);
            }
        }
        return this;
    }
}

export default EntityManager;
