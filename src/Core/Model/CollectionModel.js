import CollectionError from '../Errors/CollectionError.js';
import Collection from '../Utilities/Collection.js';

/**
 * @class CollectionModel
 */
class CollectionModel extends Collection {
    #_className = null;

    /**
     *
     * @param {{}} items instance of object model
     */
    constructor(items) {
        super(items);
    }

    /**
      *
      * @param {{}} item instance of object model
      * @return {CollectionModel}
      */
    add(item) {
        this.items.push(item);
        return this;
    }

    /**
      * find data with primary key data
      *
      * @param {int|string} id
      * @return {CollectionModel}
      */
    find(id) {
        return this.filter((x) => x[x.getPrimaryKey()] == id);
    }

    /**
      *
      * @param {[]} ids
      * @return {this}
      */
    except(ids) {
        if (!Array.isArray(ids)) {
            throw new CollectionError('expect an array for ids');
        }

        return this.filter(function(x) {
            const found = ids.find((id) => id == x[x.getPrimaryKey()]);
            return found == undefined;
        });
    }

    /**
      *
      * @param {string} columnName
      * @return {[]}
      */
    chunk(columnName) {
        const chunk = [];
        this.items.forEach((item, i) => {
            if (columnName in item) {
                chunk.push(item[columnName]);
            }
        });
        return chunk;
    }

    /**
      *
      * @param {string} columnName
      * @return {[]}
      */
    chunkUnique(columnName) {
        const chunk = [];
        this.items.forEach((item, i) => {
            if (columnName in item) {
                if (chunk.find((x) => x == item[columnName]) == undefined) {
                    chunk.push(item[columnName]);
                }
            }
        });
        return chunk;
    }

    /**
      * Get eloquent unsaved data means Id of eloquent is null
      * @return {this}
      */
    unSaved() {
        return this.filter((x) => x[x.getPrimaryKey()] == null);
    }

    /**
      * Get eloquent unsaved data means Id of eloquent is not null
      * @return {this}
      */
    saved() {
        return this.filter((x) => x[x.getPrimaryKey()] != null);
    }

    /**
      * Sum a colum of Collection item
      * @param {string} columnName
      * @return {number}
      */
    sum(columnName) {
        let total = 0;
        this.items.forEach((item, i) => {
            total += item[columnName];
        });
        return total;
    }

    /**
     *
     * Average a colum of Collection item
     * @param {string} columnName
     * @return {number}
     */
    avg(columnName) {
        let total = 0;
        this.items.forEach((item, i) => {
            total += item[columnName];
        });
        return total / this.items.length;
    }

    /**
      * Find an object has minimum value of column
      * @param {string} columnName
      * @return {{}}
      */
    min(columnName) {
        let min = 0;
        let data = null;
        this.items.forEach((item, i) => {
            if (data == null) {
                min = item[columnName];
                data = item;
            } else {
                if (min > item[columnName]) {
                    min = item[columnName];
                    data = item;
                }
            }
        });
        return data;
    }

    /**
      *
      * Find an object has maximum value of column
      * @param {string} columnName
      * @return {{}}
      */
    max(columnName) {
        let min = 0;
        let data = null;
        this.items.forEach((item, i) => {
            if (data == null) {
                min = item[columnName];
                data = item;
            } else {
                if (min < item[columnName]) {
                    min = item[columnName];
                    data = item;
                }
            }
        });
        return data;
    }

    /**
     *
     * @return {[]}
     */
    [Symbol.iterator]() {
        return this.items.values();
    };
}

export default CollectionModel;
