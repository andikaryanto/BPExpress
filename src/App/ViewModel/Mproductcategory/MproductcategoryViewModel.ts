import M_productcategories from '../../Models/M_productcategories';
import BaseViewModel from '../BaseViewModel';

/**
 * @class MproductcategoryViewModel
 */
class MproductcategoryViewModel extends BaseViewModel {
    /**
     *
     * @param {M_productcategories} model
     */
    constructor(model: M_productcategories) {
        super(true, model);
    }

    /**
     *
     * @param {any} object
     * @return {Promise<void>}
     */
    async addResource(object: any): Promise<void> {
        // object.Product = await this.model.M_Product();
        return;
    }

    /**
     * Get json frmo model
     * @return {Promise<{}>}
     */
    async toJson(): Promise<{}> {
        if (this.model == null) {
            return {};
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
