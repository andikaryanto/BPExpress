/**
 * @class Collection
 */
class Collection {
    items = [];
    page = null;
    size = null;

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
     * @returns {number}
     */
    getPage(){
      return this.page;
    }

    /**
     * 
     * @param {number} page 
     * @returns {Collection}
     */
    setPage(page){
      this.page = page;
      return this;
    }

    /**
     * 
     * @returns {number}
     */
     getSize(){
      return this.size;
    }

    /**
     * 
     * @param {number} size 
     * @returns {Collection}
     */
     setSize(size){
      this.size = size;
      return this;
    }

    /**
      * Filter data with Function parameter
      * @param {Function} callback
      * @return {Collection}
      */
    filter(callback) {
        const newdata = [];
        this.items.forEach((item, i) => {
            if (callback(item)) {
                newdata.push(item);
            }
        });
        this.items = newdata;
        return this;
    }

    /**
      *
      * @param {Function} callback
      * @return {[]}
      */
    where(callback) {
        const newdata = [];
        for (const item of this.items) {
            if (callback(item)) {
                newdata.push(item);
            }
        }
        return newdata;
    }

    /**
      *
      * @return {boolean}
      */
    isEmpty() {
        return this.items.length == 0;
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

        if (this.items.length < number) {
            return this.items;
        } else {
            return this.items.slice(0, number);
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
