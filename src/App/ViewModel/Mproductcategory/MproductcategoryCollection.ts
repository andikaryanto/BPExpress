import M_productcategories from '../../Models/M_productcategories';
import BaseCollection from '../../../Core/ViewModel/Collection';
import MproductcategoryViewModel from './MproductcategoryViewModel';
import Collection from '../../../Core/Utilities/Collection';

/**
 * @clas MproductcategoryCollection
 */
class MproductcategoryCollection extends BaseCollection {
    /**
    *
    * @param {Collection|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {M_productcategories} entity
     */
    async shape(entity) {
        await this.addItem(new MproductcategoryViewModel(entity));
    }
}

export default MproductcategoryCollection;
