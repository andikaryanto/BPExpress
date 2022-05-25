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
    static getProps(key: string) {

        const ormFields = ormMap.filter(function(x: any) {
            if(key in x){
                return x.props
            }
        });
        return ormFields;
    }

    /**
     *
     * @param {string} key
     * @return {string}
     */
    static getTable(key: string) {
        const table = ormMap.filter(function(x: any) {
            if(key in x){
                return x.props;
            }

        });
        return table;
    }

    /**
     *
     * @param {string} key
     * @return {string}
     */
    static getPrimaryKey(key: string) {
        const table = ormMap.filter(function(x: any) {
            if(key in x){
                return x.props
            }
        });
        return table;
    }
}

export default ORM;
