import BaseCollection from '../../../Core/ViewModel/Collection';
import MshopViewModel from './MshopViewModel';
import Collection from '../../../Core/Utilities/Collection';
import Mshop from '../../Entity/Mshop';
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
     * @param {Mshop} entity
     */
    async shape(entity: Mshop) {
        await this.addItem(new MshopViewModel(entity));
    }
}

export default MshopCollection;
