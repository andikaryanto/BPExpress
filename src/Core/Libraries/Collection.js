/**
 * @class Collection
 */
class Collection {
    items = [];
    page = null;
    size = null;
    total = null;

    /**
      *
      * @param {[]} items
      */
    constructor(items) {
        this.items = items;
    }

    /**
      * add data to collection
      *
      * @param {[]} item
      * @return {Collection}
      */
    add(item) {
        this.items.push(item);
        return this;
    }

    /**
     *
     * @return {number}
     */
    getTotal() {
        return this.total;
    }

    /**
     *
     * @param {number} total
     * @return {Collection}
     */
    setTotal(total) {
        this.total = total;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getPage() {
        return this.page;
    }

    /**
     *
     * @param {number} page
     * @return {Collection}
     */
    setPage(page) {
        this.page = page;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getSize() {
        return this.size;
    }

    /**
     *
     * @param {number} size
     * @return {Collection}
     */
    setSize(size) {
        this.size = size;
        return this;
    }

    /**
      * Filter data with Function parameter
      * @param {Function} closure
      * @return {Collection}
      */
    async filter(closure) {
        const newdata = [];
        for (const item of this.items) {
            const resultData = closure(item);
            if (resultData instanceof Promise) {
                if (await resultData) {
                    newdata.push(item);
                }
            } else {
                if (resultData) {
                    newdata.push(item);
                }
            }
        };
        const construct = this.constructor;
        return new construct(newdata);
    }

    /**
      *
      * @param {Function} closure
      * @return {[]}
      */
    async where(closure) {
        const newdata = [];
        for (const item of this.items) {
            const resultData = closure(item);
            if (resultData instanceof Promise) {
                if (await resultData) {
                    newdata.push(item);
                }
            } else {
                if (resultData) {
                    newdata.push(item);
                }
            }
        }
        const construct = this.constructor;
        return new construct(newdata);
    }

    /**
      *
      * @return {boolean}
      */
    isEmpty() {
        return this.items.length == 0;
    }

    /**
     * Get first item of collection
     * @return {any}
     */
    first() {
        if (this.items.length > 0) {
            return this.items[0];
        }
        return null;
    }

    /**
     * Map items of collection
     * @param {Function} closure
     */
    async map(closure) {
        const newdata = [];
        for (const item of this.items) {
            const resultData = closure(item);
            if (resultData instanceof Promise) {
                newdata.push(await resultData);
            } else {
                if (resultData) {
                    newdata.push(resultData);
                }
            }
        }
        const construct = this.constructor;
        return new construct(newdata);
    }

    /**
      *
      * @param {number} number
      * @return {[]}
      */
    take(number) {
        if (number <= 0) {
            throw new Error('Number must be greater than 0 (zero)');
        }

        const construct = this.constructor;
        if (this.items.length < number) {
            return new construct(this.items);
        } else {
            const newItems = this.items.slice(0, number);
            return new construct(newItems);
        }
    }

    /**
      *
      * @return {number}
      */
    size() {
        return this.items.length;
    }

    /**
      *
      * @return {[]}
      */
    getItems() {
        return this.items;
    }

    /**
      *
      * @return {[]}
      * @throws {Error}
      */
    getItemsOrFail() {
        if (this.isEmpty()) {
            throw new Error('No Data Found');
        }

        return this.items;
    }
}

export default Collection;
