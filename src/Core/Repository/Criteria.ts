/**
 * @class Criteria
 */
class Criteria {
    protected wwhere = {};
    protected wwhereNot = {};
    protected oorWhere = {};
    protected wwhereIn = {};
    protected llike = {};
    protected oorLike = {};
    protected ggroup = {};
    protected oorder = {};
    protected ppage = 0;
    protected ssize = 0;

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Criteria}
     */
    where(key: string, value: any): Criteria {
        this.wwhere = {...this.where, [key]: value};
        return this;
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Criteria}
     */
    whereNot(key: string, value: any): Criteria {
        this.wwhereNot = {...this.whereNot, [key]: value};
        return this;
    }


    /**
    *
    * @param {string} key
    * @param {[]} value
    * @return {Criteria}
    */
    whereIn(key: string, value: any): Criteria {
        this.wwhereIn = {...this.whereIn, [key]: value};
        return this;
    }

    /**
    *
    * @param {string} key
    * @param {any} value
    * @return {Criteria}
    */
    orWhere(key: string, value: any): Criteria {
        this.oorWhere = {...this.orWhere, [key]: value};
        return this;
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Criteria}
     */
    like(key: string, value: any): Criteria {
        this.llike = {...this.like, [key]: value};
        return this;
    }

    /**
     *
     * @param {string} key
     * @param {any} value
     * @return {Criteria}
     */
    orLike(key: string, value: any): Criteria {
        this.oorLike = {...this.orLike, [key]: value};
        return this;
    }

    /**
    *
    * @param {string} key
    * @param {any} value
    * @return {Criteria}
    */
    order(key: string, value: any): Criteria {
        this.oorder = {...this.order, [key]: value};
        return this;
    }

    /**
    *
    * @param {number} page
    * @param {number} size
    * @return {Criteria}
    */
    limit(page: number, size: number): Criteria {
        this.ppage = page;
        this.ssize = size;
        return this;
    }

    /**
     * Get criteria filter for repository
     * @return {{}}
     */
    getFilter(): {} {
        return {
            where: this.wwhere,
            whereIn: this.wwhereIn,
            whereNot: this.wwhereNot,
            orWhere: this.oorWhere,
            like: this.llike,
            orLike: this.oorLike,
            order: this.oorder,
            page: this.ppage,
            size: this.ssize,
        };
    }
}

export default Criteria;
