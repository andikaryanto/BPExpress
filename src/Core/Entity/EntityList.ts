import Collection from '../Utilities/Collection';
import EntityLooper from './EntityLooper';

/**
 * @class EntityList
 */
class EntityList<T> extends Collection<T> {
    listOf = '';
    associatedKey = Array<any>();

    /**
     *
     * @param {string} listOf
     */
    setListOf(listOf: string) {
        this.listOf = listOf;
    }

    /**
     *
     * @return {string}
     */
    getListOf() {
        return this.listOf;
    }

    /**
    *
    * @param {Array<T>} associatedKey
    * @return {EntityList}
    */
    setAssociatedKey(associatedKey: Array<any>) {
        this.associatedKey = associatedKey;
        return this;
    }

    /**
    *
    * @return {[]}
    */
    getAssociatedKey() {
        return this.associatedKey;
    }

    /**
     * Convert each entity in collection to json
     * @return {array}
     */
    async eachJson() {
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
