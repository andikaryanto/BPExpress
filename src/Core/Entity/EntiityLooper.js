import EntityList from "./EntityList";

/**
 * this class is used to cache N+1 query eager load loop
 */
class EntityLooper {
    /**
     *
     * @var {[]}
     */
    static instance = {};

    /**
     *
     * @var {[]}
     */
    items = [];

    /**
     *
     * @var {EntityList}
     */
    entityList = null;

    /**
     *
     * @var {boolean}
     */
    lastIndex = false;

    constructor() {
    }

    /**
     *
     * @return {EntityLooper}
     */
    static getInstance(key) {
        if (!(key in EntityLooper.instance)) {
            EntityLooper.instance[key] = new this;
        }
        return EntityLooper.instance[key];
    }

    /**
     * Clean the item that had been collected
     *
     * @return void
     */
    clean() {
        this.lastIndex = false;
        this.entityList = null;
        this.items = [];
        return this;
    }

    /**
     * check if current loop has data
     * @return {boolean}
     */
    hasEntityList() {
        return this.entityList != null;
    }

    /**
     * @param {[]} items
     * @return {EntityLooper}
     */
    setItems(items) {
        this.items = items;
        return this;
    }


    /**
     * @return {[]}
     */
    getItems() {
        return this.items;
    }

    /**
     * @param {EntityList} entityList
     * @return {EntityLooper}
     */
    setEntityList(entityList) {
        this.entityList = entityList;
        return this;
    }

    /**
     * @return {EntityList}
     */
    getEntityList() {
        return this.entityList;
    }

    /**
     *
     * @return {boolean}
     */
    isLastIndex() {
        return this.lastIndex;
    }

    /**
     *
     * @param {boolean} isLastIndex
     * @return {EntityLooper}
     */
    setIsLastIndex(isLastIndex) {
        this.lastIndex = isLastIndex;
        return this;
    }
}


export default EntityLooper;