import Model from '../../Core/Model/Model';

/**
 * @class BaseModel
 */
class BaseModel extends Model {
    /**
     *
     * @param {string} table
     * @param {string} primaryKey
     * @param {{}} cast
     */
    constructor(table: string, primaryKey: string, cast: {}) {
        super(table, primaryKey, cast);
    }
}

export default BaseModel;
