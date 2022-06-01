import Collection from '../Utilities/Collection';
import EntityLooper from './EntityLooper';

/**
 * @class EntityList
 */
class EntityList<T> extends Collection<T> {
    listOf: string = '';
    associatedKey: number[] = [];

    /**
     *
     * @param {string} listOf
     */
    setListOf(listOf: string): void {
        this.listOf = listOf;
    }

    /**
     *
     * @return {string}
     */
    getListOf(): string {
        return this.listOf;
    }

    /**
    *
    * @param {Array<any>} associatedKey
    * @return {EntityList<T>}
    */
    setAssociatedKey(associatedKey: Array<any>): EntityList<T> {
        this.associatedKey = associatedKey;
        return this;
    }

    /**
    *
    * @return {any[]}
    */
    getAssociatedKey(): any[] {
        return this.associatedKey;
    }

    /**
     * Convert each entity in collection to json
     * @return {array}
     */
    async eachJson(): Promise<any[]> {
        const newItems = [];

        for (const item of this.items) {
            const newItem: any = item;
            newItems.push(await newItem.toJson());
        };

        return newItems;
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
                const looper = EntityLooper.getInstance(this.instance.getListOf());
                if (!looper.hasEntityList()) {
                    looper.setEntityList(this.instance);
                }

                const lastIndex = this.instance.items.length;
                looper.setIsLastIndex(index == lastIndex);
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

export default EntityList;
