import Mproductcategory from '../../Entity/Mproductcategory';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';

/**
 * @class MproductcategoryViewModel
 */
class MproductcategoryViewModel extends BaseViewModel<Mproductcategory> {
    /**
     *
     * @param {Mproductcategory} entity
     */
    constructor(entity: Mproductcategory) {
        super(true, entity);
    }

    /**
     *
     * @param {any} object
     * @return {Promise<void>}
     */
    async addResource(object: any) {
        // object.Product = await this.entity.M_Product();
    }

    /**
     * Get json frmo entity
     * @return {{}}
     */
    async toJson() {
        if (this.entity == null) {
            return null;
        }

        const json = {
            Id: this.entity.getId(),
            Name: this.entity.getName(),
            Picture: this.entity.getPicture(),
            Description: this.entity.getDescription(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MproductcategoryViewModel;
