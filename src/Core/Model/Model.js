import ModelError from "../../App/Errors/ModelError.js";
import Db from "../Database/Connection/DbConnection.js";
import Request from "../Http/Request.js";
import Cast from "../Libraries/Cast.js";
import PlainObject from "../Libraries/PlainObject.js";
import CollectionModel from "./CollectionModel.js";
import DatatablesModel from "./DatatablesModel.js";
import PagingModel from "./PagingModel.js";
import ValidatorModel from "./ValidatorModel.js";

class Model {

     #_table = null;
     #_columns = null;
     #_primaryKey = null;
     #_db = null;

     #_cast = {};

     #_relatedClass = [];

     constructor(table, primaryKey, cast = {}) {
          this.#_table = table;
          this.#_primaryKey = primaryKey;
          this.#_db = Db.table(this.#_table);
          this.#_cast = cast;
     }

     parseFromRequest() {
          let request = Request.getInstance().body;
          for (const [key, value] of Object.entries(request)) {
               if (this.getPropsName().includes(key))
                    this[key] = value;
          }
     }

     /**
      * Get one data from database by id primary key, If Data not found will reeturn null
      * @param {{}} filter 
      * @throws {Error}
      * @returns 
      */
     static async find(id) {
          let instance = new this;
          var filter = {
               where: {
                    [instance.#_primaryKey]: id
               }
          };
          let objects = await this.findAll(filter);
          if (objects.length > 0)
               return objects[0];
          else {
               return null;
          }
     }

     /**
      * Get one data from database by id primary key, If Data not found will reeturn new intance
      * @param {{}} filter 
      * @throws {Error}
      * @returns 
      */
     static async findOrNew(id) {
          let instance = new this;
          let object = await this.find(id)
          if (object != null)
               return object;
          else {
               return instance;
          }
     }

     /**
      * Get one data from database by id primary key, If Data not found will Throw Error
      * @param {{}} filter 
      * @throws {Error}
      * @returns 
      */
     static async findOrFail(id) {
          let object = await this.find(id)
          if (object != null)
               return object;
          else {
               throw new ModelError("Data not found")
          }

     }

     /**
      * Get one data from database, If Data not found will return null
      * @param {{}} filter 
      * @throws {Error}
      * @returns 
      */
     static async findOne(filter = {}) {
          let objects = await this.findAll(filter);
          if (objects.length > 0)
               return objects[0];
          else {
               return null;
          }
     }

     /**
      * Get one data from database, If Data not found will return new instance
      * @param {{}} filter 
      * @throws {Error}
      * @returns 
      */
     static async findOneOrNew(filter = {}) {
          var instance = new this;
          let object = await this.findOne(filter);
          if (object != null)
               return object;
          else {
               return instance;
          }
     }

     /**
      * Get one data from database, If Data not found will Throw Error
      * @param {{}} filter 
      * @throws {Error}
      * @returns 
      */
     static async findOneOrFail(filter = {}) {
          let object = await this.findOne(filter)
          if (object != null)
               return object;
          else {
               throw new ModelError("Data not found")
          }
     }

     /**
      * Get all data from database
      * @param {*} filter 
      * @returns 
      */
     static async findAll(filter = {}, columns = []) {
          var instance = new this;
          return await instance.fetch(filter, columns);
     }

     /**
      * Count reesult data from database
      * @param {{}} filter 
      * @returns 
      */
     static async count(filter = {}, columns = []) {
          let objects = await this.findAll(filter, columns); 
          return objects.length;
     }

     /**
      * Collect data from datatabse
      * @param {{}} filter 
      * @returns {Promise<CollectionModel>} 
      */
     static async collect(filter = {}) {
          let objects = await this.findAll(filter); 
          return new CollectionModel(objects);
     }

     /**
     * Eeager Load Query 
     */
     static with($relatedClasses) {
          let instance = new this;
          for (let relatedClass of $relatedClasses) {
               instance.#_relatedClass.push(relatedClass);
          }
          return $instance;
     }

     /**
      * Set filter before fecthing data from database
      * @param {{}} filter 
      * @returns 
      */
     setFilter(filter = {}) {

          if (filter.join != undefined) {
               for (const [key, value] of Object.entries(filter.join)) {

                    if (value.type == undefined || value.type.toUpperCase() == "INNER") {
                         this.#_db.innerJoin(key, value.key[0], value.key[1]);
                    } else {
                         if (value.type.toUpperCase() == "LEFT") {
                              this.#_db.leftJoin(key, value.key[0], value.key[1]);
                         }
                    }

               }
          }

          if (filter.where != undefined) {
               this.#_db.where(filter.where);
          }

          if (filter.whereNot != undefined) {
               this.#_db.whereNot(filter.whereNot);
          }

          if (filter.whereIn != undefined) {
               for (const [key, value] of Object.entries(filter.whereIn)) {
                    this.#_db.whereIn(key, value);
               }
          }

          if (filter.like != undefined) {
               for (const [key, value] of Object.entries(filter.whereIn)) {
                    this.where(key, "like", `%${value}%`);
               }
          }

          if (filter.orLike != undefined) {
               for (const [key, value] of Object.entries(filter.whereIn)) {
                    this.orWhere(key, "like", `%${value}%`);
               }
          }

          if (filter.group != undefined) {
               if (filter.group.orLike != undefined) {
                    this.#_db.where(function () {
                         let i = 0;
                         for (const [key, value] of Object.entries(filter.group.orLike)) {
                              if (i == 0) {
                                   this.where(key, "like", `%${value}%`);
                              } else {
                                   this.orWhere(key, "like", `%${value}%`)
                              }
                              i++;
                         }
                    })
               }
          }

          if (filter.order != undefined) {
               for (const [key, value] of Object.entries(filter.order)) {
                    this.#_db.orderBy(key, value);
               }
          }

          if (filter.page != undefined && filter.size != undefined) {
               let offset = filter.size * (filter.page - 1);
               this.#_db.limit(filter.size).offset(offset);
          }

          return this;
     }

     /**
      * Fetch the data from database
      * @param {Function} callback 
      * @param {{}} filter 
      * @returns 
      */
     async fetch(filter = {}, columns = []) {

          this.#_columns = this.getPropsName();
          if (columns.length > 0)
               this.#_columns = columns;

          this.#_db.column(this.#_columns);

          this.setFilter(filter);
          return this.setToEntity();
          // return this.#_db;
     }

     /**
      * Set to instance of current class
      * @param {Function} callback 
      */
     async setToEntity() {
          let results = await this.#_db;
          // this.#_db.then(results => {
          let objects = [];
          let newClassName = this.constructor;
          results.forEach((e, i) => {
               let obj = new newClassName();
               for (const [key, value] of Object.entries(e)) {

                    let found = Object.keys(this.#_cast).find(keys => keys == key);
                    if (found) {
                         obj[key] = Cast.to(value, this.#_cast[key]);
                    } else {
                         obj[key] = value;
                    }
                    if (typeof obj["_change_" + key] === 'function') {
                         obj["_change_" + key]();
                    }
               }
               objects.push(obj)
          });
          return objects;
          // callback(objects);
          // });
     }

     /**
      * Set to plain object
      * @return {{}}
      */
     toJson() {
          let json = {};
          for (const [key, value] of Object.entries(this)) {
               json[key] = value;
          }
          return json;
     }

     /**
      * Save data when your primary key of instance is not set otherwise will update 
      * @param {*} transaction 
      * @param {*} isIncrement 
      * @returns 
      */
     async save(transaction = null, isIncrement = true) {

          var obj = this;
          const primaryKey = obj.#_primaryKey;
          const table = obj.#_table;
          let result = null;
          if (obj[primaryKey] == null) {

               if (transaction != null)
                    result = Db.transacting(transaction).into(table).insert(obj);
               else
                    result = Db.into(table).insert(obj);
               let id = await result;
               this[primaryKey] = id[0];
               if (id[0] > 0)
                    return true;
               return false;
          } else {
               if (transaction != null)
                    result = Db.table(table).transacting(transaction).where(primaryKey, obj[primaryKey]).update(obj);
               else
                    result = Db.table(table).where(primaryKey, obj[primaryKey]).update(obj);

               await result;
               return true;
          }

     }

     /**
      * Delete data from current instance
      * @param {*} transaction 
      * @returns 
      */
     async delete(transaction = null) {

          const obj = this;
          const primaryKey = obj.#_primaryKey;
          const table = obj.#_table;
          let ret = null;
          if (transaction != null)
               ret = await Db.transacting(transaction).table(table).where(primaryKey, obj[primaryKey]).del();
          else
               ret = await Db.table(table).where(primaryKey, obj[primaryKey]).del();
          if (ret > 0)
               return true;
          return false;
     }

     /**
     * @param string relatedEloquent Relates Table 
     * @param string foreignKey key name of this Eloquent
     * @return Object or null
     * 
     * Get parent related table data
     */
     async hasOne(relatedEloquent, foreignKey, filter = {}) {
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
                              [foreignKey]: this[foreignKey]
                         };
                    }
                    result = await relatedEloquent.findOne(filter);
                    return result;
               }
          }

          return null;
     }

     /**
      * @param string relatedEloquent Relates Table 
      * @param string foreignKey key name of this Eloquent
      * @return Object or new Instance
      * 
      * Get parent related table data
      */
     async hasOneOrNew(relatedEloquent, foreignKey, filter = {}) {
          let result = await this.hasOne(relatedEloquent, foreignKey, filter);
          if (result != null) {
               return result;
          }
          return new relatedEloquent();
     }

     /**
      * @param string relatedEloquent Relates Table 
      * @param string foreignKey key name of this Eloquent
      * @return Object or Throw Error
      * 
      * Get parent related table data
      */
     async hasOneOrFail(relatedEloquent, foreignKey, filter = {}) {
          let result = await this.hasOne(relatedEloquent, foreignKey, filter);
          if (result != null) {
               return result;
          }
          throw new ModelError("Data not Found")
     }

     /**
     * @param string relatedEloquent Relates Table \App\Eloquent\YourClass
     * @param string foreignKey key name of related Eloquent
     * @param string filter param to filter data
     * @return Eloquent array Object or null
     * 
     * Get child related table data
     */
     async hasMany(relatedEloquent, foreignKey, filter = {}) {
          const primaryKey = this.#_primaryKey;
          if (this[primaryKey] != null) {
               if (filter.where != undefined) {
                    filter.where[foreignKey] = this[primaryKey];
               } else {
                    filter.where = {
                         [foreignKey]: this[primaryKey]
                    };
               }
               let result = await relatedEloquent.findAll(filter);
               if (result.length > 0) {
                    return result;
               }
          }
          return null;
     }

     /**
     * @param string relatedEloquent Relates Table \App\Eloquent\YourClass
     * @param string foreignKey key name of related Eloquent
     * @param string filter param to filter data
     * @return Eloquent array Object or Throw Error
     * 
     * Get child related table data
     */
     async hasManyOrFail(relatedEloquent, foreignKey, filter = {}) {
          let result = await this.hasMany(relatedEloquent, foreignKey, filter);
          if (result != null) {
               return result;
          }
          throw new ModelError("Data List Not Found");
     }

     /**
     * @param {Class} relatedEloquent Relates Table \App\Eloquent\YourClass
     * @param {string} foreignKey key name of related Eloquent
     * @param {string} filter param to filter data
     * @return Eloquent array Object or null
     * 
     * Get child related table data
     */
     async hasFirst(relatedEloquent, foreignKey, filter = []) {

          const primaryKey = this.#_primaryKey;
          if (this[primaryKey] != null) {
               if (filter.where != undefined) {
                    filter.where[foreignKey] = this[primaryKey];
               } else {
                    filter.where = {
                         [foreignKey]: this[primaryKey]
                    };
               }
               let result = await relatedEloquent.findAll(filter);
               if (result.length > 0) {
                    return result[0];
               }
          }
          return null;
     }

     /**
     * @param string relatedEloquent Relates Table \App\Eloquent\YourClass
     * @param string foreignKey key name of related Eloquent
     * @param string filter param to filter data
     * @return Eloquent array Object or new instance
     * 
     * Get child related table data
     */
     async hasFirstOrNew(relatedEloquent, foreignKey, filter = {}) {
          let result = await this.hasFirst(relatedEloquent, foreignKey, filter);
          if (result != null) {
               return result;
          }
          return new relatedEloquent();
     }

     /**
     * @param string relatedEloquent Relates Table \App\Eloquent\YourClass
     * @param string foreignKey key name of related Eloquent
     * @param string filter param to filter data
     * @return Eloquent array Object or throw Error
     * 
     * Get child related table data
     */
     async hasFirstOrFail(relatedEloquent, foreignKey, filter = {}) {
          let result = await this.hasFirst(relatedEloquent, foreignKey, filter);
          if (result != null) {
               return result;
          }
          throw new ModelError("Data Not Found");
     }


     /**
      * 
      * @param {{}} rules 
      * @param {{}} customError 
      * @returns 
      */
     validateRules(rules, customError = {}) {
          return ValidatorModel.validate(this.toJson(), rules, customError);
     }

     /**
      * Get object datatable
      * @param {import("express").Request} request
      * @param {{}} filter
      */
     static datatables(filter = {}, method = "POST") {
          return new DatatablesModel(this, filter, method)
     }

     /**
      * Check data wether is saved or not.
      * If your table has no auto increment on it then this method is not considered to be valid.
      * This method is valid when your table has auto incerement primary key
      */
     isSaved() {
          return this[this.#_primaryKey] != null;
     }

     /**
      * Get object paging
      * @param {import("express").Request} request
      * @param {{}} filter
      */
     static async paginate(filter = {}, page = 1, size = 6, showedPage = 5, queryParams = {}) {
          return await new PagingModel(this, filter, page, size, showedPage, queryParams).fetch();
     }

     /**
      * Get array of props name
      */
     getPropsName() {
          return Object.getOwnPropertyNames(this);
     }

     /**
      * get primarykey
      * @retrurn {string}
      */
     getPrimaryKey() {
          return this.#_primaryKey;
     }

     /**
      * Get table name
      * @return {string}
      */
     getTable() {
          return this.#_table;
     }

     /**
      * extends class traits
      */
     addTrait(trait, options = {}) {
          let newTrait = new trait();
          newTrait.register(this.constructor, options);
     }

}

export default Model;