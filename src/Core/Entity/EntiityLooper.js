import EntityList from "./EntityList";

/**
 * this class is used to cache N+1 query eager load loop
 */
class EntityLooper
{
    /**
     *
     * @var array
     */
    static instance = [];

    /**
     *
     * @var array
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
    isLastIndex = false;

     constructor()
    {
    }

    /**
     *
     * @return {EntityLooper}
     */
    getInstance(key)
    {
        if (!isset(EntityLooper.instance[key])) {
            EntityLooper.instance[key] = new static();
        }
        return EntityLooper.instance[key];
    }

    /**
     * Clean the item that had been collected
     *
     * @return void
     */
    clean()
    {
        this.isLastIndex = false;
        this.entityList = null;
        this.items = [];
        return this;
    }

    /**
     * check if current loop has data
     * @return {boolean}
     */
    hasEntityList()
    {
        return !empty(this.entityList);
    }

    /**
     * @param {[]} items
     * @return {EntityLooper}
     */
    setItems(items)
    {
        this.items = items;
        return this;
    }


    /**
     * @return {[]}
     */
    getItems()
    {
        return this.items;
    }

    /**
     * @param {EntityList} entityList
     * @return {EntityLooper}
     */
    setEntityList(entityList)
    {
        this.entityList = entityList;
        return this;
    }


    /**
     * @return EntityList
     */
    getEntityList()
    {
        return this.entityList;
    }

    /**
     *
     * @return {boolean}
     */
    isLastIndex()
    {
        return this.isLastIndex;
    }

    /**
     *
     * @param {boolean} isLastIndex
     * @return {EntityLooper}
     */
    setIsLastIndex(isLastIndex)
    {
        this.isLastIndex = isLastIndex;
        return this;
    }
}


export default EntityLooper;