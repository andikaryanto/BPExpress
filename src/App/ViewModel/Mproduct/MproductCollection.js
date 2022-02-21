import M_products from '../../Models/M_products';
import BaseCollection from '../BaseCollection';
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
     * @param {M_products} model
     */
    shape(model) {
        this.addItem(new MproductViewModel(model));
    }
}

export default MproductCollection;
