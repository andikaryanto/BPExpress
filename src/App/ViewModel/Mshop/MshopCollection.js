import M_shops from '../../Models/M_shops';
import BaseCollection from '../../../Core/ViewModel/Collection';
import MshopViewModel from './MshopViewModel';
/**
 * @class MshopCollection
 */
class MshopCollection extends BaseCollection {
    /**
    *
    * @param {CollectionModel|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {M_shops} model
     */
    async shape(model) {
        await this.addItem(new MshopViewModel(model));
    }
}

export default MshopCollection;
