const ormMap = require('../../orm').default;

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
    static getProps(key: string): {} {
        const entities = ormMap.filter(function(x: any) {
            if (key in x) {
                return x;
            }
        });
        return entities[0][key].props;
    }

    /**
     *
     * @param {string} key
     * @return {string}
     */
    static getTable(key: string): string {
        const entities = ormMap.filter(function(x: any) {
            if (key in x) {
                return x;
            }
        });
        return entities[0][key].table;
    }

    /**
     *
     * @param {string} key
     * @return {string}
     */
    static getPrimaryKey(key: string): string {
        const entities = ormMap.filter(function(x: any) {
            if (key in x) {
                return x;
            }
        });
        return entities[0][key].primaryKey;
    }
}

export default ORM;
