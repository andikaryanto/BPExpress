/**
 * @class Criteria
 */
class Criteria {
    #_where = {};
    #_whereNot = {};
    #_orWhere = {};
    #_whereIn = {};
    #_like = {};
    #_orLike = {};
    #_group = {};
    #_order = {};
    #_page = 0;
    #_size = 0;

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */
    where(key, value) {
        this.#_where = {...this.#_where, [key]: value};
        return this;
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */
    whereNot(key, value) {
        this.#_whereNot = {...this.#_whereNot, [key]: value};
        return this;
    }


    /**
    *
    * @param {string} key
    * @param {[]} value
    * @return {Query}
    */
    whereIn(key, value) {
        this.#_whereIn = {...this.#_whereIn, [key]: value};
        return this;
    }

    /**
    *
    * @param {string} key
    * @param {any} value
    * @return {Query}
    */
    orWhere(key, value) {
        this.#_orWhere = {...this.#_orWhere, [key]: value};
        return this;
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */
    like(key, value) {
        this.#_like = {...this.#_like, [key]: value};
        return this;
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Query}
     */
    orLike(key, value) {
        this.#_orLike = {...this.#_orLike, [key]: value};
        return this;
    }

    /**
    *
    * @param {string} key
    * @param {any} value
    * @return {Query}
    */
    order(key, value) {
        this.#_order = {...this.#_order, [key]: value};
        return this;
    }

    /**
    *
    * @param {number} page
    * @param {any} size
    * @return {Query}
    */
    limit(page, size) {
        this.#_page = page;
        this.#_size = size;
        return this;
    }

    /**
     * Get criteria filter for repository
     * @return {{}}
     */
    getFilter() {
        return {
            where: this.#_where,
            whereIn: this.#_whereIn,
            whereNot: this.#_whereNot,
            orWhere: this.#_orWhere,
            like: this.#_like,
            orLike: this.#_orLike,
            order: this.#_order,
            page: this.#_page,
            size: this.#_size,
        };
    }
}

export default Criteria;
