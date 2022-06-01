import EntityList from './EntityList';

/**
 * this class is used to cache N+1 query eager load loop
 */
class EntityLooper<T> {
    /**
     *
     * @var {[]}
     */
    static instance: any = {};

    /**
     *
     * @var {{}}
     */
    items = {};

    /**
     *
     * @var {EntityList<T>}
     */
    entityList:EntityList<T>|null = null;

    /**
     *
     * @var {boolean}
     */
    lastIndex = false;

    /**
     *
     */
    constructor() {
    }

    /**
     * @param {string} key
     * @return {EntityLooper<T>}
     */
    static getInstance(key: string) {
        if (!(key in EntityLooper.instance)) {
            EntityLooper.instance[key] = new this;
        }
        return EntityLooper.instance[key];
    }

    /**
     * Clean the item that had been collected
     *
     * @return {EntityLooper<Text>}
     */
    clean(): EntityLooper<T> {
        this.lastIndex = false;
        this.entityList = null;
        this.items = [];
        return this;
    }

    /**
     * check if current loop has data
     * @return {boolean}
     */
    hasEntityList(): boolean {
        return this.entityList != null;
    }

    /**
     * @param {[]} items
     * @return {EntityLooper}
     */
    setItems(items: any[]): EntityLooper<T> {
        this.items = items;
        return this;
    }


    /**
     * @return {{}}
     */
    getItems() {
        return this.items;
    }

    /**
     * @param {EntityList<T>} entityList
     * @return {EntityLooper<T>}
     */
    setEntityList(entityList: EntityList<T>): EntityLooper<T> {
        this.entityList = entityList;
        return this;
    }

    /**
     * @return {EntityList<T>}
     */
    getEntityList(): EntityList<T>|null {
        return this.entityList;
    }

    /**
     *
     * @return {boolean}
     */
    isLastIndex(): boolean {
        return this.lastIndex;
    }

    /**
     *
     * @param {boolean} isLastIndex
     * @return {EntityLooper<T>}
     */
    setIsLastIndex(isLastIndex: boolean): EntityLooper<T> {
        this.lastIndex = isLastIndex;
        return this;
    }
}


export default EntityLooper;
