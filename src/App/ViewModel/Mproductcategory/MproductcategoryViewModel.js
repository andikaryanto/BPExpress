import Mproductcategory from '../../Entity/Mproductcategory';
import BaseViewModel from '../BaseViewModel';

/**
 * @class MproductcategoryViewModel
 */
class MproductcategoryViewModel extends BaseViewModel {
    /**
     *
     * @param {Mproductcategory} model
     */
    constructor(model) {
        super(true, model);
    }

    /**
     *
     * @param {{}} object
     * @return {void}
     */
    addResource(object) {
        // object.Product = await this.model.M_Product();
    }

    /**
     * Get json frmo model
     * @return {{}}
     */
    toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.getId(),
            Name: this.model.getName(),
            Picture: this.model.getPicture(),
            Description: this.model.getDescription(),
        };

        if (this.getAutoAddResource()) {
            this.addResource(json);
        }

        return json;
    }
}

export default MproductcategoryViewModel;
