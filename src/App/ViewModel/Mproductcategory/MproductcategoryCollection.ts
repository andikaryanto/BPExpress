import BaseCollection from '../../../Core/ViewModel/Collection';
import MproductcategoryViewModel from './MproductcategoryViewModel';
import Collection from '../../../Core/Utilities/Collection';
import Mproductcategory from '../../Entity/Mproductcategory';

/**
 * @clas MproductcategoryCollection
 */
class MproductcategoryCollection extends BaseCollection<Mproductcategory> {
    /**
    *
    * @param {Collection} collection
    */
    constructor(collection: Collection<Mproductcategory>) {
        super(collection);
    }

    /**
     *
     * @param {Mproductcategory} entity
     */
    async shape(entity: Mproductcategory) {
        await this.addItem(new MproductcategoryViewModel(entity));
    }
}

export default MproductcategoryCollection;
