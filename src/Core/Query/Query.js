import Entity from '../Entity/Entity';
import Repository from '../Repository/Repository';

/**
 * @class Query
 */
class Query {
    repository = null;
    filter = {};
    where = {};
    like = {};

    /**
     *
     * @param {Entity} entity
     */
    constructor(entity) {
        this.repository = new Repository(entity);
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */
    where(key, value) {
        this.where = {...this.where, [key]: value};
        return this;
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */
    like(key, value) {
        this.like = {...this.like, [key]: value};
        return this;
    }

    /**
     *
     */
    getKeyValue() {

    }
}

export default Query;
