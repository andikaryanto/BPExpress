import M_shopproducts from '../../Models/M_shopproducts';
import BaseCollection from '../../../Core/ViewModel/Collection';
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
    async shape(model) {
        await this.addItem(new MshopproductViewModel(model));
    }
}

export default MshopproductCollection;
