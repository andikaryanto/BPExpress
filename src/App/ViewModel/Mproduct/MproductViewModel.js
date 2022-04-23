import Mproduct from '../../Entity/Mproduct';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';
import MproductcategoryViewModel from '../Mproductcategory/MproductcategoryViewModel';
/**
 * @class MproductViewModel
 */
class MproductViewModel extends BaseViewModel {
    /**
     *
     * @param {Mproduct} entity
     */
    constructor(entity) {
        super(true, entity);
    }

    /**
     * Add resource
     * @param {{}} object
     */
    async addResource(object) {
        const category = await this.entity.getProductcategory();
        if (category) {
            object.ProductCategory = await (new MproductcategoryViewModel(category)).toJson();
        }
    }

    /**
     * Get json data
     * @return {{}}
     */
    async toJson() {
        if (this.entity == null) {
            return null;
        }

        const json = {
            Id: this.entity.getId(),
            Name: this.entity.getName(),
            Description: this.entity.getDescription(),
            Producer: this.entity.getProducer(),
            PackSize: this.entity.getPackSize(),
            Quality: this.entity.getQuality(),
            Picture: this.entity.getPicture(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }
        return json;
    }
}

export default MproductViewModel;
