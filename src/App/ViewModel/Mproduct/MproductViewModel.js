import M_products from '../../Models/M_products';
import M_users from '../../Models/M_users';
import BaseViewModel from '../BaseViewModel';
import MproductcategoryViewModel from '../Mproductcategory/MproductcategoryViewModel';
/**
 * @class MproductViewModel
 */
class MproductViewModel extends BaseViewModel {
    /**
     *
     * @param {M_products} model
     */
    constructor(model) {
        super(true, model);
    }

    /**
     * Add resource
     * @param {{}} object
     */
    async addResource(object) {
        const category = await this.model.M_Productcategory();
        object.ProductCategory = await (new MproductcategoryViewModel(category)).toJson();
    }

    /**
     * Get json data
     * @return {{}}
     */
    async toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.Id,
            M_Productcategory_Id: this.model.M_Productcategory_Id,
            Name: this.model.Name,
            Description: this.model.Description,
            Producer: this.model.Producer,
            PackSize: this.model.PackSize,
            Quality: this.model.Quality,
            Picture: this.model.Picture,
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }
        return json;
    }
}

export default MproductViewModel;