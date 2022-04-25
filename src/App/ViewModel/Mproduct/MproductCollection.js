import M_products from '../../Models/M_products';
import BaseCollection from '../../../Core/ViewModel/Collection';
import MproductViewModel from './MproductViewModel';
/**
 * @class MproductCollection
 */
class MproductCollection extends BaseCollection {
    /**
    *
    * @param {CollectionModel|array} collection
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
