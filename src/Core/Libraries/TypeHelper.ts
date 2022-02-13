import { BlobOptions } from "buffer";

/**
 * @class TypeHelper
 */
class TypeHelper {

    /**
     * 
     * @param value 
     * @returns {string}
     */
    static getString(value: any): string {
        return String(value);
    }

    /**
     * 
     * @param value 
     * @returns {boolean}
     */
    static getBool(value: any): boolean {
        return Boolean(value);
    }
}

export default TypeHelper;