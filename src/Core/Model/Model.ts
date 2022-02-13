import { Knex } from 'knex';
import Validator from 'validatorjs';
import ModelError from '../../App/Errors/ModelError.js';
import Db from '../Database/Connection/DbConnection.js';
import Request from '../Http/Request.js';
import Cast from '../Libraries/Cast.js';
import PlainObject from '../Libraries/PlainObject.js';
import CollectionModel from './CollectionModel.js';
import DatatablesModel from './DatatablesModel.js';
import PagingModel from './PagingModel.js';
import ValidatorModel from './ValidatorModel.js';
/**
 * @class Model
 */
class Model {
    private table?: string;
    private columns?: [];
    private primaryKey?: string;
    private db!: Knex.QueryBuilder;

    private cast = {};

    private relatedClass = [];

    /**
     *
     * @param {string} table
     * @param {string} primaryKey
     * @param {{}} cast
     */
    constructor(table: string, primaryKey: string, cast: {} = {}) {
        this.table = table;
        this.primaryKey = primaryKey;
        this.db = Db.table(this.table);
        this.cast = cast;
    }

    /**
     * Parse data from request to model
     */
    parseFromRequest() {
        const request = Request.getInstance().getRequest().body;
        for (const [key, value] of Object.entries(request)) {
            if (this.getPropsName().includes(key)) {
                this[key] = value;
            }
        }
    }

    /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {number|string} id
      * @throws {Error}
      * @return {Model | null}
      */
    static async find(id: number | string): Model | null {
        const instance = new this;
        const filter = {
            where: {
                [instance.primaryKey]: id,
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
      * Get one data from database by id primary key, If Data not found will reeturn new intance
      * @param {number|string} id
      * @throws {Error}
      * @return {object}
      */
    static async findOrNew(id: number | string): object {
        const instance = new this;
        const object = await this.find(id);
        if (object != null) {
            return object;
        } else {
            return instance;
        }
    }

    /**
      * Get one data from database by id primary key, If Data not found will Throw Error
      * @param {number|string} id
      * @throws {Error}
      * @return {object}
      */
    static async findOrFail(id: number | string): {} | null {
        const object = await this.find(id);
        if (object != null) {
            return object;
        } else {
            throw new ModelError('Data not found');
        }
    }

    /**
      * Get one data from database, If Data not found will return null
      * @param {{}} filter
      * @throws {Error}
      * @return {object|null}
      */
    static async findOne(filter: {} = {}): object | null {
        const objects = await this.findAll(filter);
        if (objects.length > 0) {
            return objects[0];
        } else {
            return null;
        }
    }

    /**
      * Get one data from database, If Data not found will return new instance
      * @param {{}} filter
      * @throws {Error}
      * @return {object}
      */
    static async findOneOrNew(filter: {} = {}): object {
        const instance = new this;
        const object = await this.findOne(filter);
        if (object != null) {
            return object;
        } else {
            return instance;
        }
    }

    /**
      * Get one data from database, If Data not found will Throw Error
      * @param {{}} filter
      * @throws {Error}
      * @return {object}
      */
    static async findOneOrFail(filter: {} = {}): object {
        const object = await this.findOne(filter);
        if (object != null) {
            return object;
        } else {
            throw new ModelError('Data not found');
        }
    }

    /**
      * Get all data from database
      * @param {{}} filter
      * @param {[]} columns
      */
    static async findAll(filter: {} = {}, columns: [] = []) {
        const instance = new this;
        return await instance.fetch(filter, columns);
    }

    /**
      * Count reesult data from database
      * @param {{}} filter
      * @param {[]} columns
      * @return {number}
      */
    static async count(filter: {} = {}, columns: [] = []): number {
        const objects = await this.findAll(filter, columns);
        return objects.length;
    }

    /**
      * Collect data from datatabse
      * @param {{}} filter
      * @return {Promise<CollectionModel>}
      */
    static async collect(filter: {} = {}): Promise<CollectionModel> {
        const objects = await this.findAll(filter);
        return new CollectionModel(objects);
    }

    /**
     * Eeager Load Query
     * @param {[]} relatedClasses
     * @return {object}
     */
    static with(relatedClasses: []): object {
        const instance = new this;
        for (const relatedClass of relatedClasses) {
            instance.relatedClass.push(relatedClass);
        }
        return instance;
    }

    /**
      * Set filter before fecthing data from database
      * @param {any} filter
      * @return {this}
      */
    setFilter(filter: any = {}): this {
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
    async fetch(filter: {} = {}, columns: [] = []) {
        this.columns = this.getSelectColumns();
        if (columns.length > 0) {
            this.columns = columns;
        }

        this.db.column(this.columns);
        this.setFilter(filter);

        let withRelatedData = null;
        const results = await this.db;

        if (this.relatedClass.length > 0) {
            withRelatedData = await this.fetchRelatedData(results);
        }
        return this.setToEntity(results, withRelatedData);
        // return this.db;
    }

    /**
      * Set to instance of current class
      * @param {[]} results
      * @param {any} withRelatedData
      */
    async setToEntity(results: [], withRelatedData: any = null) {
        const objects = [];
        const newClassName = this.constructor;
        results.forEach((e, i) => {
            const obj = new newClassName();
            for (const [key, value] of Object.entries(e)) {
                const found = Object.keys(this.cast).find((keys) => keys == key);
                if (found) {
                    obj[key] = Cast.to(value, this.cast[key]);
                } else {
                    obj[key] = value;
                }
                if (typeof obj['_change_' + key] === 'function') {
                    obj['_change_' + key]();
                }
            }
            if (withRelatedData != null) {
                for (const relatedData of withRelatedData) {
                    const findRelated = function(item) {
                        return obj[relatedData.ForeignKey] == item[item.getPrimaryKey()];
                    };
                    const relatedDataFound = relatedData.Data.where(findRelated);
                    obj[relatedData.ClassName] = relatedDataFound.length == 0 ? null : relatedDataFound[0];
                }
            }
            objects.push(obj);
        });
        return objects;
    }

    /**
     * Get Related Data as array, used with "with" function for Eager Load
     * @param {array} results of object
     */
    async fetchRelatedData(results: Array<any>) {
        const resultRelatedData = [];
        const collectionResult = new CollectionModel(results);
        let fieldValues = null;
        for (const related of this.relatedClass) {
            const instance = new related.ClassName;
            const nameSpace = related.ClassName;
            const className = instance.constructor.name;
            fieldValues = collectionResult.chunkUnique(related.ForeignKey);

            const params = {
                whereIn: {
                    [instance.getPrimaryKey()]: fieldValues,
                },
            };

            const fetchedData = await nameSpace.collect(params);
            const result = {
                ForeignKey: related['ForeignKey'],
                ClassName: className,
                Data: fetchedData,
            };
            resultRelatedData.push(result);
        }
        return resultRelatedData;
    }

    /**
      * Set to plain object
      * @return {{}}
      */
    toJson(): {} {
        const json = {};
        for (const [key, value] of Object.entries(this)) {
            json[key] = value;
        }
        return json;
    }

    /**
      * Save data when your primary key of instance is not set otherwise will update
      * @param {*} transaction
      * @param {boolean} isIncrement
      */
    async save(transaction: any = null, isIncrement: boolean = true) {
        const obj = this;
        const primaryKey = obj.primaryKey;
        const table = obj.table;
        let result = null;
        if (obj[primaryKey] == null) {
            if (transaction != null) {
                result = Db.transacting(transaction).into(table).insert(obj);
            } else {
                result = Db.into(table).insert(obj);
            }
            const id = await result;
            this[primaryKey] = id[0];
            if (id[0] > 0) {
                return true;
            }
            return false;
        } else {
            if (transaction != null) {
                result = Db.table(table).transacting(transaction).where(primaryKey, obj[primaryKey]).update(obj);
            } else {
                result = Db.table(table).where(primaryKey, obj[primaryKey]).update(obj);
            }

            await result;
            return true;
        }
    }

    /**
      * Delete data from current instance
      * @param {*} transaction
      */
    async delete(transaction: any = null) {
        const obj = this;
        const primaryKey = obj.primaryKey;
        const table = obj.table;
        let ret = null;
        if (transaction != null) {
            ret = await Db.transacting(transaction).table(table).where(primaryKey, obj[primaryKey]).del();
        } else {
            ret = await Db.table(table).where(primaryKey, obj[primaryKey]).del();
        }
        if (ret > 0) {
            return true;
        }
        return false;
    }

    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get parent related table data
     */
    async hasOne(relatedEloquent: string, foreignKey: string, filter: {} = {}) {
        let result = null;
        if (this[foreignKey] != null) {
            if (PlainObject.isEmpty(filter)) {
                result = await relatedEloquent.find(this[foreignKey]);
                return result;
            } else {
                if (filter.where != undefined) {
                    filter.where[foreignKey] = this[foreignKey];
                } else {
                    filter.where = {
                        [foreignKey]: this[foreignKey],
                    };
                }
                result = await relatedEloquent.findOne(filter);
                return result;
            }
        }

        return null;
    }

    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get parent related table data
     */
    async hasOneOrNew(relatedEloquent: string, foreignKey: string, filter: {} = {}) {
        const result = await this.hasOne(relatedEloquent, foreignKey, filter);
        if (result != null) {
            return result;
        }
        return new relatedEloquent();
    }

    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     * @throws {ModelError}
     *
     * Get parent related table data
     */
    async hasOneOrFail(relatedEloquent: string, foreignKey: string, filter: {} = {}) {
        const result = await this.hasOne(relatedEloquent, foreignKey, filter);
        if (result != null) {
            return result;
        }
        throw new ModelError('Data not Found');
    }

    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get child related table data
     */
    async hasMany(relatedEloquent: string, foreignKey: string, filter: {} = {}) {
        const primaryKey = this.primaryKey;
        if (this[primaryKey] != null) {
            if (filter.where != undefined) {
                filter.where[foreignKey] = this[primaryKey];
            } else {
                filter.where = {
                    [foreignKey]: this[primaryKey],
                };
            }
            const result = await relatedEloquent.findAll(filter);
            if (result.length > 0) {
                return result;
            }
        }
        return null;
    }

    /**
     * @param {string} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     * @throws {ModelError}
     *
     * Get child related table data
     */
    async hasManyOrFail(relatedEloquent: string, foreignKey: string, filter: {} = {}) {
        const result = await this.hasMany(relatedEloquent, foreignKey, filter);
        if (result != null) {
            return result;
        }
        throw new ModelError('Data List Not Found');
    }

    /**
     * @param {Class} relatedEloquent Relates Table \App\Eloquent\YourClass
     * @param {string} foreignKey key name of related Eloquent
     * @param {string} filter param to filter data
     *
     * Get child related table data
     */
    async hasFirst(relatedEloquent: Class, foreignKey: string, filter: string = []) {
        const primaryKey = this.primaryKey;
        if (this[primaryKey] != null) {
            if (filter.where != undefined) {
                filter.where[foreignKey] = this[primaryKey];
            } else {
                filter.where = {
                    [foreignKey]: this[primaryKey],
                };
            }
            const result = await relatedEloquent.findAll(filter);
            if (result.length > 0) {
                return result[0];
            }
        }
        return null;
    }

    /**
     * @param {Class} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get child related table data
     */
    async hasFirstOrNew(relatedEloquent: Class, foreignKey: string, filter: {} = {}) {
        const result = await this.hasFirst(relatedEloquent, foreignKey, filter);
        if (result != null) {
            return result;
        }
        return new relatedEloquent();
    }

    /**
     * @param {Class} relatedEloquent Relates Table
     * @param {string} foreignKey key name of this Eloquent
     * @param {{}} filter filter data
     *
     * Get child related table data
     */
    async hasFirstOrFail(relatedEloquent: Class, foreignKey: string, filter: {} = {}) {
        const result = await this.hasFirst(relatedEloquent, foreignKey, filter);
        if (result != null) {
            return result;
        }
        throw new ModelError('Data Not Found');
    }


    /**
      *
      * @param {{}} rules
      * @param {{}} customError
      * @return {Validator}
      */
    validateRules(rules: {}, customError: {} = {}): Validator {
        return ValidatorModel.validate(this.toJson(), rules, customError);
    }

    /**
      * Get object datatable
      * @param {{}} filter
      * @param {string} method
      * @return {DatatablesModel}
      */
    static datatables(filter: {} = {}, method: string = 'POST'): DatatablesModel {
        return new DatatablesModel(this, filter, method);
    }

    /**
      * Check data wether is saved or not.
      * If your table has no auto increment on it then this method is not considered to be valid.
      * This method is valid when your table has auto incerement primary key
      * @return {boolean}
      */
    isSaved(): boolean {
        return this[this.primaryKey] != null;
    }

    /**
      * Get object paging
      * @param {{}} filter
      * @param {number} page
      * @param {number} size
      * @param {number} showedPage
      * @param {{}} queryParams
      * @return {Promise<{}>}
      */
    static async paginate(filter: {} = {}, page: number = 1, size: number = 6, showedPage: number = 5, queryParams: {} = {}): Promise<{}> {
        return await new PagingModel(this, filter, page, size, showedPage, queryParams).fetch();
    }

    /**
      * Get array of props name
      * @return {string[]}
      */
    getPropsName(): string[] {
        return Object.getOwnPropertyNames(this);
    }

    /**
      * get primarykey
      * @return {string}
      */
    getPrimaryKey(): string {
        return this.primaryKey;
    }

    /**
      * Get table name
      * @return {string}
      */
    getTable(): string {
        return this.table;
    }

    /**
      * extends class traits
      * @param {*} trait
      * @param {{}} options
      * @return {void}
      */
    addTrait(trait: any, options: {} = {}): void {
        const newTrait = new trait();
        newTrait.register(this.constructor, options);
    }

    /**
      * Get select column of current table
      * @return {[]}
      */
    getSelectColumns(): [] {
        const selectColumns = [];
        for (const column of this.getPropsName()) {
            selectColumns.push(this.getTable() + '.' + column);
        }
        return selectColumns;
    }
}

export default Model;
