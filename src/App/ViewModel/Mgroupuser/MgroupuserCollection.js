import BaseCollection from '../../../Core/ViewModel/Collection';
import MgroupuserViewModel from './MgroupuserViewModel';
import Mgroupuser from '../../Entity/Mgroupuser';
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
     * @param {Mgroupuser} entity
     */
    async shape(entity) {
        await this.addItem(new MgroupuserViewModel(entity));
    }
}

export default MgroupuserCollection;
