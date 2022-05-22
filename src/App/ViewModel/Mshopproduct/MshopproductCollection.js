import M_shopproducts from '../../Models/M_shopproducts';
import BaseCollection from '../../../Core/ViewModel/Collection';
import MshopproductViewModel from './MshopproductViewModel';
import Mshopproduct from '../../Entity/Mshopproduct';
import Collection from '../../../Core/Utilities/Collection';

/**
 * @class MshopproductCollection
 */
class MshopproductCollection extends BaseCollection {
    /**
    *
    * @param {Collection|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {Mshopproduct} entity
     */
    async shape(entity) {
        await this.addItem(new MshopproductViewModel(entity));
    }
}

export default MshopproductCollection;
