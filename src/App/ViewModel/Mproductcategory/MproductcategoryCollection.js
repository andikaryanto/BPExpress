import M_productcategories from '../../Models/M_productcategories';
import BaseCollection from '../../../Core/ViewModel/BaseCollection';
import MproductcategoryViewModel from './MproductcategoryViewModel';

/**
 * @clas MproductcategoryCollection
 */
class MproductcategoryCollection extends BaseCollection {
    /**
    *
    * @param {CollectionModel|array} collection
    */
    constructor(collection) {
        super(collection);
    }

    /**
     *
     * @param {M_productcategories} model
     */
    async shape(model) {
        await this.addItem(new MproductcategoryViewModel(model));
    }
}

export default MproductcategoryCollection;
