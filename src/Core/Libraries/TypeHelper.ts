
/**
 * @class TypeHelper
 */
class TypeHelper {
    /**
     *
     * @param {any} value
     * @return {string}
     */
    static getString(value: any): string {
        return String(value);
    }

    /**
     *
     * @param {any} value
     * @return {boolean}
     */
    static getBool(value: any): boolean {
        return Boolean(value);
    }
}

export default TypeHelper;
