import M_groupusers from '../../Models/M_groupusers';
import BaseCollection from '../BaseCollection';
import MgroupuserViewModel from './MgroupuserViewModel';
/**
 * @class MgroupuserCollection
 */
class MgroupuserCollection extends BaseCollection {
    /**
    *
    * @param {CollectionModel|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {M_groupusers} model
     */
    shape(model) {
        this.addItem(new MgroupuserViewModel(model));
    }
}

export default MgroupuserCollection;
