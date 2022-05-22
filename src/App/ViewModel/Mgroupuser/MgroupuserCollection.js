import BaseCollection from '../../../Core/ViewModel/Collection';
import MgroupuserViewModel from './MgroupuserViewModel';
import Mgroupuser from '../../Entity/Mgroupuser';
import Collection from '../../../Core/Utilities/Collection';
/**
 * @class MgroupuserCollection
 */
class MgroupuserCollection extends BaseCollection {
    /**
    *
    * @param {Collection|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {Mgroupuser} entity
     */
    async shape(entity) {
        await this.addItem(new MgroupuserViewModel(entity));
    }
}

export default MgroupuserCollection;
