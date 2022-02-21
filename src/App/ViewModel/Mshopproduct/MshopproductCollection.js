import M_shopproducts from '../../Models/M_shopproducts';
import BaseCollection from '../BaseCollection';
import MshopproductViewModel from './MshopproductViewModel';

/**
 * @class MshopproductCollection
 */
class MshopproductCollection extends BaseCollection {
    /**
    *
    * @param {CollectionModel|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {M_shopproducts} model
     */
    shape(model) {
        this.addItem(new MshopproductViewModel(model));
    }
}

export default MshopproductCollection;
