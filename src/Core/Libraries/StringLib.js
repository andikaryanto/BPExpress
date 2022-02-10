/**
 * @class StringLib
 */
class StringLib {
    /**
      *
      * @param {string} value
      * @return {string}
      */
    static ucFirst(value) {
        if (typeof value !== 'string') {
            return '';
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

export default StringLib;
