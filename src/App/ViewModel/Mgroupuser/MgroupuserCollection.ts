import BaseCollection from '../../../Core/ViewModel/Collection';
import MgroupuserViewModel from './MgroupuserViewModel';
import Mgroupuser from '../../Entity/Mgroupuser';
import Collection from '../../../Core/Utilities/Collection';
/**
 * @class MgroupuserCollection
 */
class MgroupuserCollection extends BaseCollection<Mgroupuser> {
    /**
    *
    * @param {Collection} collection
    */
    constructor(collection: Collection<Mgroupuser>) {
        super(collection);
    }

    /**
     *
     * @param {Mgroupuser} entity
     */
    async shape(entity: Mgroupuser) {
        await this.addItem(new MgroupuserViewModel(entity));
    }
}

export default MgroupuserCollection;
