import Model from '../../Core/Model/Model.js';

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
    constructor(table, primaryKey, cast) {
        super(table, primaryKey, cast);
    }
}

export default BaseModel;
