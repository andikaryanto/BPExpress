/**
 * @class Collection
 */
class Collection {
    /**
     * The number data will be returned, this is needed when a lot of data
     * in database will be shown, limit them to reduce of memory draining
     *
     * return this null | 0 will fetch all data from database
     *
     * @return {number}
     */
    static numberOfDataReturned(): number {
        return 500;
    }
}
export default Collection;
