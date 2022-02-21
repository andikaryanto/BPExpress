import md5 from 'md5';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @class CommonLib
 */
class CommonLib {
    /**
      *
      * @param {string} value
      * @return {string}
      */
    static encryptMd5(value) {
        const hash = md5(value);
        const lastString = hash.substr(hash.length - 5, 5);
        const reversed = lastString.split('').reverse().join('');
        const newstring = hash.substr(0, hash.length - 5) + reversed;
        return newstring;
    }

    /**
     *
     * @param {any} value
     * @return {boolean}
     */
    static isNull(value) {
        return value == null;
    }

    /**
     *
     * @param {any} value
     * @return {boolean}
     */
    static isUndefined(value) {
        return value == undefined;
    }

    /**
     * Get env Key
     * @return {string}
     */
    static getKey() {
        return process.env.APP_KEY;
    }

    /**
     * Get default user
     * @return {string}
     */
    static defaultUser() {
        return 'super_admin';
    }
}

export default CommonLib;
