import CollectionModel from '../../../Core/Model/CollectionModel';
import BaseCollection from '../../../Core/ViewModel/Collection';
import Muser from '../../Entity/Muser';
import MuserViewModel from './MuserViewModel';

/**
 * @class MuserCollection
 */
class MuserCollection extends BaseCollection {
    /**
     *
     * @param {CollectionModel|array} collection
     */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {Muser} entity
     */
    async shape(entity) {
        await this.addItem(new MuserViewModel(entity));
    }
}

export default MuserCollection;
