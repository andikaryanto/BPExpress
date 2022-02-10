/**
 * @class PlainObject
 */
class PlainObject {
    /**
      * Check plain object is empty
      * @param {{}} object
      * @return {boolean}
      */
    static isEmpty(object = {}) {
        return Object.keys(object).length === 0;
    }
}

export default PlainObject;
