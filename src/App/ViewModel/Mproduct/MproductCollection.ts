import BaseCollection from '../../../Core/ViewModel/Collection';
import MproductViewModel from './MproductViewModel';
import Collection from '../../../Core/Utilities/Collection';
import Mproduct from '../../Entity/Mproduct';
/**
 * @class MproductCollection
 */
class MproductCollection extends BaseCollection<Mproduct> {
    /**
    *
    * @param {Collection} collection
    */
    constructor(collection: Collection<Mproduct>) {
        super(collection);
    }

    /**
     *
     * @param {Mproduct} entity
     */
    async shape(entity: Mproduct) {
        await this.addItem(new MproductViewModel(entity));
    }
}

export default MproductCollection;
