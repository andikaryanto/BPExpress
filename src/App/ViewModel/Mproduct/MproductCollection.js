import M_products from '../../Models/M_products';
import BaseCollection from '../../../Core/ViewModel/Collection';
import MproductViewModel from './MproductViewModel';
import Collection from '../../../Core/Utilities/Collection';
/**
 * @class MproductCollection
 */
class MproductCollection extends BaseCollection {
    /**
    *
    * @param {Collection|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {M_products} entity
     */
    async shape(entity) {
        await this.addItem(new MproductViewModel(entity));
    }
}

export default MproductCollection;
