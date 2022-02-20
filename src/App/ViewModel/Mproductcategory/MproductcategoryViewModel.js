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
    async addResource(object) {
        // object.Product = await this.model.M_Product();
    }

    /**
     * Get json frmo model
     * @return {{}}
     */
    async toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.Id,
            Name: this.model.Name,
            Picture: this.model.Picture,
            Description: this.model.Description,
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MproductcategoryViewModel;
