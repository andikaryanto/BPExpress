import {Knex} from 'knex';
import {useCallback} from 'react';
import Collection from '../../App/Config/Collection';
import Db from '../Database/Connection/DbConnection';
import Entity from '../Entity/Entity';
import EntityList from '../Entity/EntityList';
import PlainObject from '../Libraries/PlainObject';
import Criteria from './Criteria';
import FilterInterface from './FilterInterface';

/**
 * @class Respository
 */
class Repository<T> {
    protected table: string|undefined;
    protected columns: string[]|undefined;
    protected entity: typeof Entity;
    protected db: any;

    /**
    *
     * @param {any} entity
     */
    constructor(entity: typeof Entity) {
        this.entity = entity;
        const table = this.entity.getTable();
        this.db = Db.table(table);
    }

    /**
     * create new Entity
     * @return {any}
     */
    newEntity(): T {
        const entity: any = this.entity;
        return new entity();
    }

    /**
      * Fetch the data from database
      * @param {{}|Criteria} filter
      * @param {[]} columns
      * @param {number|null} page
      * @param {number|null} size
      * @return {Promise<T[]>}
      */
    async findAll(filter = {}, columns = [], page = null, size = null):Promise<T[]> {
        return await this.fetch(filter, columns, {}, page, size);
    }

    /**
      * Set filter before fecthing data from database
      * @param {{}} filter
      * @param {number|null} page
      * @param {number|null} size
      * @return {this}
      */
    setFilter(filter: any = {}, page: number|null = null, size: number|null = null): Repository<T> {
        if (filter.join != undefined) {
            for (const [key, _value] of Object.entries(filter.join)) {
                const value: any = _value;
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
                this.db.where(function(this: Knex<any, unknown[]>) {
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
            filter.size != null&&
            filter.page != 0 &&
            filter.size != 0) {
            const offset = filter.size * (filter.page - 1);
            this.db.limit(filter.size).offset(offset);
        }

        return this;
    }

    /**
      * Fetch the data from database
      * @param {{}|Criteria} filter
      * @param {[]} columns
      * @param {any} associatedKey
      * @param {number|null} page
      * @param {number|null} size
      * @return {Promise<any>}
      */
    async fetch(
        filter:Criteria|{} = {},
        columns = [],
        associatedKey: any = {},
        page: number|null = null,
        size: number|null = null,
    ): Promise<T[]> {
        this.columns = this.entity.getSelectColumns();
        if (columns.length > 0) {
            this.columns = columns;
        }

        this.db.column(this.columns);

        if (filter instanceof Criteria) {
            filter = filter.getFilter();
        }

        this.setFilter(filter, page, size);
        const results = await this.db;

        this.db
            .clear('select')
            .clear('where')
            .clear('join')
            .clear('order')
            .clear('limit')
            .clear('offset')
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
    setToEntity(results: Array<any>, associatedKey: any = {} ): T[] {
        const objects: T[] = [];
        const newClassName: any = this.entity;
        const props = this.entity.getProps();
        for (const result of results) {
            const e = result;
            const obj: any = new newClassName();
            for (const [key, _value] of Object.entries(props)) {
                const value: any = _value;
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
    async findOrAny(id: number|string): Promise<T | any> {
        const primaryKey = this.entity.getPrimaryKey();
        const filter = {
            where: {
                [primaryKey]: id,
            },
        };
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
            return null;
        } else {
            return null;
        }
    }


    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} id
      * @throws {Error}
      * @return {Promise<Entity>|Promise<null>}
      */
     async find(id: number|string): Promise<T | null> {
        const primaryKey = this.entity.getPrimaryKey();
        const filter = {
            where: {
                [primaryKey]: id,
            },
        };
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
        }
        return null;
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} id
      * @throws {Error}
      * @return {Promise<Entity>|Promise<null>}
      */
     async findOrError(id: number|string): Promise<T> {
        const primaryKey = this.entity.getPrimaryKey();
        const filter = {
            where: {
                [primaryKey]: id,
            },
        };
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
        }
        throw Error('No such entity found');
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} id
      * @throws {Error}
      * @return {Promise<Entity>|Promise<null>}
      */
     async findOrNew(id: number|string): Promise<T> {
        const primaryKey = this.entity.getPrimaryKey();
        const filter = {
            where: {
                [primaryKey]: id,
            },
        };
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
        }
        return this.newEntity();
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {{}|Criteria} filter
      * @throws {Error}
      * @return {{}|null}
      */
    async findOne(filter = {}): Promise<T | null> {
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
        }
        return null;
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {{}|Criteria} filter
      * @throws {Error}
      * @return {{}|null}
      */
     async findOneOrError(filter = {}): Promise<T> {
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
        }

        throw Error('No such entity found');
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {{}|Criteria} filter
      * @throws {Error}
      * @return {{}|null}
      */
     async findOneOrNew(filter = {}): Promise<T> {
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
        }

        return this.newEntity();
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {{}|Criteria} filter
      * @throws {Error}
      * @return {{}|null}
      */
     async findOneOrAny(filter = {}): Promise<T | any> {
        const objects = await this.findAll(filter);

        if (objects) {
            if (objects.length > 0) {
                return objects[0];
            }
        }
        return null;
    }

    /**
    *
    * @param {{}|Criteria} filter
    * @param {number|null} page
    * @param {number|null} size
    * @return {Promise<EntityList<T>>}
    */
    async collect(filter = {}, page: number = 1, size: number|null = null): Promise<EntityList<T>> {
        const filterForCounting = filter instanceof Criteria ? filter : {...filter};

        if (size == null) {
            size = Collection.numberOfDataReturned();
        }
        const associatedKey:any = {};
        let totalData = 0; ;
        const result: T[]|null = await this.fetch(filter, [], associatedKey, page, size);
        const entityList = new EntityList<T>(result);
        totalData = await this.count(filterForCounting);

        if (size > totalData) {
            size = totalData;
        }

        entityList.setTotal(totalData);
        entityList.setPage(page);
        entityList.setSize(size);
        entityList.setListOf(this.entity.name);
        entityList.setAssociatedKey(associatedKey);
        return entityList;
    }

    /**
     * Count of data from database
    * @param {{}|Criteria} filter
     * @return {number}
     */
    async count(filter = {}): Promise<number> {
        if (filter instanceof Criteria) {
            filter = filter.getFilter();
        }

        this.setFilter(filter);
        const result = await this.db.count({count: '*'});
        const counter = (result)[0].count;
        this.db.clear('select')
            .clear('where')
            .clear('join');
        return counter;
    }
}

export default Repository;
