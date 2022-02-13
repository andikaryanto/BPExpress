/**
 * @class Collection
 */
class Collection {
    items: any[] = [];

    /**
      *
      * @param {any[]} items
      */
    constructor(items: any[]) {
        this.items = items;
    }

    /**
      * add data to collection
      *
      * @param {any} item
      * @return {Collection}
      */
    add(item: any): Collection {
        this.items.push(item);
        return this;
    }

    /**
      * Filter data with Function parameter
      * @param {Function} callback
      * @return {Collection}
      */
    filter(callback: Function): Collection {
        const newdata: any[] = [];
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
    where(callback: Function): any[] {
        const newdata: any[] = [];
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
    isEmpty(): boolean {
        return this.items.length == 0;
    }

    /**
      *
      * @param {number} number
      * @return {any[]}
      */
    take(number: number): any[] {
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
    size(): number {
        return this.items.length;
    }

    /**
      *
      * @return {any[]}
      */
    getItems(): any[] {
        return this.items;
    }

    /**
      *
      * @return {[]}
      * @throws {Error}
      */
    getItemsOrFail(): any[] {
        if (this.isEmpty()) {
            throw new Error('No Data Found');
        }

        return this.items;
    }
}

export default Collection;
