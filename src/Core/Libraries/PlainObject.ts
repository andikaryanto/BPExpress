/**
 * @class PlainObject
 */
class PlainObject {
    /**
      * Check plain object is empty
      * @param {{}} object
      * @return {boolean}
      */
    static isEmpty(object = {}): boolean {
        return Object.keys(object).length === 0;
    }
}

export default PlainObject;
