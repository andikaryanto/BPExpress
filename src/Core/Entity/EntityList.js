import Collection from "../Libraries/Collection";
import EntityLooper from "./EntiityLooper";

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

    [Symbol.iterator]() {
        let index = 0;
        return {
            instance: this,
            next: function () {
                var looper = EntityLooper.getInstance(this.instance.getListOf());
                if (!looper.hasEntityList()) {
                    looper.setEntityList(this.instance);
                }

                var lastIndex = this.instance.items.length;
                looper.setIsLastIndex(index == lastIndex);
                var result = {
                    value: this.instance.items[index],
                    done: index == lastIndex
                };
                index++;
                return result;
            }
        };
    };
}

export default EntityList;