import CollectionModel from '../../../Core/Model/CollectionModel';
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
    constructor(collection: CollectionModel | Array<any>) {
        super(collection);
    }

    /**
     *
     * @param {M_shopproducts} model
     */
    async shape(model: M_shopproducts) {
        ;
        await this.addItem(new MshopproductViewModel(model));
    }
}

export default MshopproductCollection;
