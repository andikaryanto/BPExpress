import ormMap from '../../orm';

/**
 * @class ORM
 */
class ORM {
    /**
     *
     */
    constructor() {

    }

    /**
     *
     * @param {string} key
     * @return {{}}
     */
    static getProps(key) {
        const ormFields = ormMap.filter((x) => x[key])[0][key].props;
        return ormFields;
    }

    /**
     *
     * @param {string} key
     * @return {string}
     */
    static getTable(key) {
        const table = ormMap.filter((x) => x[key])[0][key].table;
        return table;
    }

    /**
     *
     * @param {string} key
     * @return {string}
     */
    static getPrimaryKey(key) {
        const table = ormMap.filter((x) => x[key])[0][key].primaryKey;
        return table;
    }
}

export default ORM;
