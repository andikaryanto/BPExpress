import Collection from '../../../Core/Utilities/Collection';
import BaseCollection from '../../../Core/ViewModel/Collection';
import Muser from '../../Entity/Muser';
import MuserViewModel from './MuserViewModel';

/**
 * @class MuserCollection
 */
class MuserCollection extends BaseCollection {
    /**
     *
     * @param {Collection} collection
     */
    constructor(collection: Collection) {
        super(collection);
    }

    /**
     *
     * @param {Muser} entity
     */
    async shape(entity: Muser) {
        await this.addItem(new MuserViewModel(entity));
    }
}

export default MuserCollection;
