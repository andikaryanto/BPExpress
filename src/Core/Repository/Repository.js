import ORM from "../Database/ORM";
import Db from '../Database/Connection/DbConnection.js';
import Collection from "../Libraries/Collection";

/**
 * @class Respository
 */
class Repository {

    table;
    colums;
    entity;
    db;

    constructor(entity){
        this.entity = entity;
        this.table = this.getTable();
        this.db = Db.table(this.table)
    }

    getClass(){

    }

    
    /**
     * Get all props name
     * @returns 
     */
    getProps(){
        return ORM.getProps(this.entity.name);
    }

    /**
     * get Table Name
     * @returns {string}
     */
    getTable(){
        return ORM.getTable(this.entity.name);
    }

    /**
     * GetP primary key field
     * @returns 
     */
    getPrimaryKey(){
        return ORM.getPrimaryKey(this.entity.name);
    }

    /**
     * Get select columns
     * @returns 
     */
    getSelectColumns(){
        let selectedColumn =[];
        const colums = this.getProps();
        for(const [key, value] of Object.entries(colums)){
            if(value.isPrimitive){
                selectedColumn.push(this.table+ '.' + key)
            } else {
                selectedColumn.push(this.table+ '.' + value.foreignKey)
            }
        }
        return selectedColumn;
    }

    /**
      * Fetch the data from database
      * @param {{}} filter
      * @param {[]} columns
      */
    async findAll(filter = {}, columns = []){
        return this.fetch(filter, columns)
    }

    /**
      * Set filter before fecthing data from database
      * @param {{}} filter
      * @return {this}
      */
     setFilter(filter = {}) {
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

        if (filter.page != undefined && filter.size != undefined) {
            const offset = filter.size * (filter.page - 1);
            this.db.limit(filter.size).offset(offset);
        }

        return this;
    }

    /**
      * Fetch the data from database
      * @param {{}} filter
      * @param {[]} columns
      */
     async fetch(filter = {}, columns = []) {
        this.columns = this.getSelectColumns();
        if (columns.length > 0) {
            this.columns = columns;
        }

        this.db.column(this.columns);
        this.setFilter(filter);
        const results = await this.db;

        this.db
            .clear('select')
            .clear('where')
            .clear('join')
            .clear('order')
            .clear('having');

        return this.setToEntity(results);
    }

    /**
      * Set to instance of current class
      * @param {[]} results
      * @param {any} withRelatedData
      */
     async setToEntity(results) {
        const objects = [];
        const newClassName = this.entity;
        const props = this.getProps();
        for(const result of results) {
            let e = result;
            const obj = new newClassName();
            for (const [key, value] of Object.entries(props)) {
                if(value.isPrimitive){
                    obj[key] = e[key];
                } else {
                    const instanceRelatedClass = new Repository(value.type);
                    let instance = await instanceRelatedClass.find(e[value.foreignKey])
                    obj[key] = instance;
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
      * @return {{}|null}
      */
     async find(id) {
        const primaryKey = this.getPrimaryKey();
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
      * @param {number|string} id
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

    async collect(filter = {}){
        return new Collection(await this.findAll(filter));
    }
}

export default Repository;