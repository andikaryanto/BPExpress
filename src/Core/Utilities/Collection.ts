/**
 * @class Collection
 */
class Collection<T> {
    items: Array<T>;
    page: number|null = null;
    size: number|null = null;
    total: number|null = null;

    /**
      *
      * @param {Array<T>} items
      */
    constructor(items: Array<T> = []) {
        this.items = items;
    }

    /**
      * add data to collection
      *
      * @param {T} item
      * @return {Collection}
      */
    add(item: T) {
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
    setTotal(total: number) {
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
    setPage(page: number) {
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
     * @param {?number} size
     * @return {Collection}
     */
    setSize(size: number|null = null) {
        this.size = size;
        return this;
    }

    /**
      * Filter data with Function parameter
      * @param {Function} closure
      * @return {Collection}
      */
    async filter(closure: Function) {
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
        const construct: any = this.constructor;
        return new construct(newdata);
    }

    /**
      *
      * @param {Function} closure
      * @return {[]}
      */
    async where(closure:Function) {
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
        const construct: any = this.constructor;
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
    async map(closure: Function) {
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
        const construct: any = this.constructor;
        return new construct(newdata);
    }

    /**
      *
      * @param {number} number
      * @return {[]}
      */
    take(number: number) {
        if (number <= 0) {
            throw new Error('Number must be greater than 0 (zero)');
        }

        const construct: any = this.constructor;
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
    count() {
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

    /**
     *
     * @return {{}}
     */
     [Symbol.iterator]() {
        let index = 0;
        return {
            instance: this,
            next: function() {
                const lastIndex = this.instance.items.length;
                const result = {
                    value: this.instance.items[index],
                    done: index == lastIndex,
                };
                index++;
                return result;
            },
        };
    };
}

export default Collection;
