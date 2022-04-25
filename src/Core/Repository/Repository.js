import {useCallback} from 'react';
import Db from '../Database/Connection/DbConnection.js';
import Entity from '../Entity/Entity';
import EntityList from '../Entity/EntityList';
import PlainObject from '../Libraries/PlainObject.js';

/**
 * @class Respository
 */
class Repository {
    table;
    colums;
    entity;
    db;

    /**
    *
     * @param {Entity} entity
     */
    constructor(entity) {
        this.entity = entity;
        const table = this.entity.getTable();
        this.db = Db.table(table);
    }

    /**
     * create new Entity
     * @return {any}
     */
    newEntity() {
        return new this.entity;
    }

    /**
      * Fetch the data from database
      * @param {{}} filter
      * @param {[]} columns
      * @param {number|null} page
      * @param {number|null} size
      */
    async findAll(filter = {}, columns = [], page = null, size = null) {
        return await this.fetch(filter, columns, {}, page, size);
    }

    /**
      * Set filter before fecthing data from database
      * @param {{}} filter
      * @param {number|null} page
      * @param {number|null} size
      * @return {this}
      */
    setFilter(filter = {}, page = null, size = null) {
        if (filter.join != undefined) {
            for (const [key, value] of Object.entries(filter.join)) {
                if (value.type == undefined || value.type.toUpperCase() == 'INNER') {
                    this.db.innerJoin(key, value.key[0], value.key[1]);
                } else {
                    if (value.type.toUpperCase() == 'LEFT') {
                        this.db.leftJoin(key, value.key[0], value.key[1]);
                    }
                }
            }
        }

        if (filter.where != undefined) {
            this.db.where(filter.where);
        }

        if (filter.whereNot != undefined) {
            this.db.whereNot(filter.whereNot);
        }

        if (filter.whereIn != undefined) {
            for (const [key, value] of Object.entries(filter.whereIn)) {
                this.db.whereIn(key, value);
            }
        }

        if (filter.like != undefined) {
            for (const [key, value] of Object.entries(filter.like)) {
                this.db.where(key, 'like', `%${value}%`);
            }
        }

        if (filter.orLike != undefined) {
            for (const [key, value] of Object.entries(filter.whereIn)) {
                this.db.orWhere(key, 'like', `%${value}%`);
            }
        }

        if (filter.group != undefined) {
            if (filter.group.orLike != undefined) {
                this.db.where(function() {
                    let i = 0;
                    for (const [key, value] of Object.entries(filter.group.orLike)) {
                        if (i == 0) {
                            this.where(key, 'like', `%${value}%`);
                        } else {
                            this.orWhere(key, 'like', `%${value}%`);
                        }
                        i++;
                    }
                });
            }
        }

        if (filter.order != undefined) {
            for (const [key, value] of Object.entries(filter.order)) {
                this.db.orderBy(key, value);
            }
        }

        if (!('page' in filter) || !('size' in filter)) {
            filter.page = page;
            filter.size = size;
        }

        if (filter.page != undefined &&
            filter.size != undefined &&
            filter.page != null &&
            filter.size != null) {
            const offset = filter.size * (filter.page - 1);
            this.db.limit(filter.size).offset(offset);
        }

        return this;
    }

    /**
      * Fetch the data from database
      * @param {{}} filter
      * @param {[]} columns
      * @param {{}} associatedKey
      * @param {number|null} page
      * @param {number|null} size
      * @return {Promise<[]>}
      */
    async fetch(filter = {}, columns = [], associatedKey = {}, page = null, size = null) {
        this.columns = this.entity.getSelectColumns();
        if (columns.length > 0) {
            this.columns = columns;
        }

        this.db.column(this.columns);
        this.setFilter(filter, page, size);
        const results = await this.db;

        this.db
            .clear('select')
            .clear('where')
            .clear('join')
            .clear('order')
            .clear('having');

        const result = this.setToEntity(results, associatedKey);

        return result;
    }

    /**
      * Set to instance of current class
      * @param {[]} results
      * @param {{}} associatedKey
      * @return {[]}
      */
    setToEntity(results, associatedKey) {
        const objects = [];
        const newClassName = this.entity;
        const props = this.entity.getProps();
        for (const result of results) {
            const e = result;
            const obj = new newClassName();
            for (const [key, value] of Object.entries(props)) {
                if (value.isPrimitive) {
                    if (value.type == 'datetime') {
                        let datetimeValue = null;
                        if (e[key]) {
                            datetimeValue = new Date(e[key]);
                        }
                        obj[key] = datetimeValue;
                    } else {
                        obj[key] = e[key];
                    }
                } else {
                    const foreignKeyValue = e[value.foreignKey];
                    if (foreignKeyValue) {
                        if (value.foreignKey in associatedKey) {
                            if (!associatedKey[value.foreignKey].includes(foreignKeyValue)) {
                                associatedKey[value.foreignKey] = [...associatedKey[value.foreignKey], foreignKeyValue];
                            }
                        } else {
                            associatedKey[value.foreignKey] = [foreignKeyValue];
                        }
                        obj.constrains[value.foreignKey] = foreignKeyValue;
                    }
                }
            }
            objects.push(obj);
        }

        return objects;
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} id
      * @throws {Error}
      * @return {Promise<Entity>|Promise<null>}
      */
    async find(id) {
        const primaryKey = this.entity.getPrimaryKey();
        const filter = {
            where: {
                [primaryKey]: id,
            },
        };
        const objects = await this.findAll(filter);
        if (objects.length > 0) {
            return objects[0];
        } else {
            return null;
        }
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} filter
      * @throws {Error}
      * @return {{}|null}
      */
    async findOne(filter = {}) {
        const objects = await this.findAll(filter);
        if (objects.length > 0) {
            return objects[0];
        } else {
            return null;
        }
    }

    /**
    *
    * @param {{}} filter
    * @param {number|null} page
    * @param {number|null} size
    * @return {Promise<EntityList>}
    */
    async collect(filter = {}, page = null, size = null) {
        const associatedKey = {};
        const result = await this.fetch(filter, [], associatedKey, page, size);
        const entityList = new EntityList(result);
        entityList.setTotal(await this.count(filter));
        entityList.setPage(page);
        entityList.setSize(size);
        entityList.setListOf(this.entity.name);
        entityList.setAssociatedKey(associatedKey);
        return entityList;
    }

    /**
     * Count of data from database
     * @param {{}} filter
     * @return {number}
     */
    async count(filter = {}) {
        this.setFilter(filter);
        const counter = (await this.db.count({count: '*'}))[0].count;
        this.db.clear('select')
            .clear('where')
            .clear('join');
        return counter;
    }
}

export default Repository;
