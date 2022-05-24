import M_shops from '../../Models/M_shops';
import BaseCollection from '../../../Core/ViewModel/Collection';
import MshopViewModel from './MshopViewModel';
import Collection from '../../../Core/Utilities/Collection';
/**
 * @class MshopCollection
 */
class MshopCollection extends BaseCollection {
    /**
    *
    * @param {Collection} collection
    */
    constructor(collection: Collection) {
        super(collection);
    }

    /**
     *
     * @param {M_shops} entity
     */
    async shape(entity) {
        await this.addItem(new MshopViewModel(entity));
    }
}

export default MshopCollection;
