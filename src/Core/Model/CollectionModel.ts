import CollectionError from '../Errors/CollectionError.js';
import Collection from '../Utilities/Collection.js';

/**
 * @class CollectionModel
 */
class CollectionModel extends Collection {
    /**
     *
     * @param {any[]} items instance of object model
     */
    constructor(items: any[][]) {
        super(items);
    }

    /**
      *
      * @param {any} item instance of object model
      * @return {CollectionModel}
      */
    add(item: any): CollectionModel {
        this.items.push(item);
        return this;
    }

    /**
      * find data with primary key data
      *
      * @param {number|string} id
      * @return {CollectionModel}
      */
    // find(id: number | string): CollectionModel {
    //     return this.filter((x: any) => x[x.getPrimaryKey()] == id);
    // }

    // /**
    //   *
    //   * @param {[]} ids
    //   * @return {CollectionModel}
    //   */
    // except(ids: []): CollectionModel {
    //     if (!Array.isArray(ids)) {
    //         throw new CollectionError('expect an array for ids');
    //     }

    //     return this.filter(function(x: any) {
    //         const found = ids.find((id) => id == x[x.getPrimaryKey()]);
    //         return found == undefined;
    //     });
    // }

    /**
      *
      * @param {string} columnName
      * @return {any[]}
      */
    chunk(columnName: string): any[] {
        const chunk: any[] = [];
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
    chunkUnique(columnName: string): any[] {
        const chunk: any[] = [];
        this.items.forEach((item, i) => {
            if (columnName in item) {
                if (chunk.find((x) => x == item[columnName]) == undefined) {
                    chunk.push(item[columnName]);
                }
            }
        });
        return chunk;
    }

    // /**
    //   * Get eloquent unsaved data means Id of eloquent is null
    //   * @return {CollectionModel}
    //   */
    // unSaved(): CollectionModel {
    //     return this.filter((x: any) => x[x.getPrimaryKey()] == null);
    // }

    // /**
    //   * Get eloquent unsaved data means Id of eloquent is not null
    //   * @return {this}
    //   */
    // saved(): this {
    //     return this.filter((x: any) => x[x.getPrimaryKey()] != null);
    // }

    /**
      * Sum a colum of Collection item
      * @param {string} columnName
      * @return {number}
      */
    sum(columnName: string): number {
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
    avg(columnName: string): number {
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
    min(columnName: string): {} {
        let min = 0;
        let data: any = null;
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
    max(columnName: string): {} {
        let min = 0;
        let data: any = null;
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
