import Collection from '../Libraries/Collection';
import EntityLooper from './EntityLooper';

/**
 * @class EntityList
 */
class EntityList extends Collection {
    listOf = '';
    associatedKey = [];

    /**
     *
     * @param {string} listOf
     */
    setListOf(listOf) {
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
    * @param {[]} associatedKey
    * @return {EntityList}
    */
    setAssociatedKey(associatedKey) {
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
