/**
 * @class BaseRepository
 */
class BaseRepository{

    /**
     * Get class model
     */
    getClass(){

    }

    /**
     * Get data by Id
     * @param {number|string} id 
     */
    async find(id){
        let className = this.getClass();
        return await className['find'](id);
    }

    /**
     * Get data by Id
     * @param {number|string} id 
     */
     async findOrNew(id){
        let className = this.getClass();
        return await className['findOrNew'](id);
    }

    /**
      * Get one data from database by id primary key, If Data not found will Throw Error
      * @param {number|string} id
      * @throws {Error}
      * @return {object}
      */
     async findOrFail(id) {
        let className = this.getClass();
        return await className['findOrFail'](id);
    }

    /**
      * Get one data from database, If Data not found will return new instance
      * @param {{}} filter
      * @throws {Error}
      * @return {object|null}
     */
     async findOne(filter = {}){
        let className = this.getClass();
        return await className['findOne'](filter);
    }

    /**
      * Get one data from database, If Data not found will Throw Error
      * @param {{}} filter
      * @throws {Error}
      * @return {object}
      */
     async findOneOrFail(filter = {}) {
        let className = this.getClass();
        return await className['findOneOrFail'](filter);
    }

    /**
      * Get all data from database
      * @param {{}} filter
      * @param {[]} columns
      */
     async findAll(filter = {}, columns = []) {
        let className = this.getClass();
        return await className['findAll'](filter, columns);
    }

    /**
      * Count reesult data from database
      * @param {{}} filter
      * @param {[]} columns
      * @return {number}
      */
    async count(filter = {}, columns = []) {
        let className = this.getClass();
        return await className['count'](filter, columns);
    }

    /**
     * Get collection data
     * @param {{}} param
     */
    async collect(param = {}){
        let className = this.getClass();
        return await className['collect'](param);
    }

    /**
     * Eeager Load Query
     * @param {[]} relatedClasses
     * @return {object}
     */
     async with(relatedClasses) {
        let className = this.getClass();
        return await className['with'](relatedClasses);
    }
}

export default BaseRepository;