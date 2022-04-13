import CollectionModel from '../../../Core/Model/CollectionModel';
import M_users from '../../Models/M_users';
import BaseCollection from '../../../Core/ViewModel/BaseCollection';
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
     * @param {M_users} model
     */
    async shape(model) {
        await this.addItem(new MuserViewModel(model));
    }
}

export default MuserCollection;
