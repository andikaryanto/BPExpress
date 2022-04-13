import Mproduct from '../../Entity/Mproduct';
import BaseViewModel from '../../../Core/ViewModel/BaseViewModel';
import MproductcategoryViewModel from '../Mproductcategory/MproductcategoryViewModel';
/**
 * @class MproductViewModel
 */
class MproductViewModel extends BaseViewModel {
    /**
     *
     * @param {Mproduct} model
     */
    constructor(model) {
        super(true, model);
    }

    /**
     * Add resource
     * @param {{}} object
     */
    async addResource(object) {
        const category = this.model.getProductcategory();
        object.ProductCategory = (new MproductcategoryViewModel(category)).toJson();
    }

    /**
     * Get json data
     * @return {{}}
     */
    async toJson(){
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.getId(),
            Name: this.model.getName(),
            Description: this.model.getDescription(),
            Producer: this.model.getProducer(),
            PackSize: this.model.getPackSize(),
            Quality: this.model.getQuality(),
            Picture: this.model.getPicture(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }
        return json;
    }
}

export default MproductViewModel;
