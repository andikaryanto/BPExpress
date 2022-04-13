import Mshopproduct from '../../Entity/Mshopproduct';
import M_shopproducts from '../../Models/M_shopproducts';
import BaseViewModel from '../../../Core/ViewModel/BaseViewModel';
import MproductViewModel from '../Mproduct/MproductViewModel';

/**
 * @clas MshopproductViewModel
 */
class MshopproductViewModel extends BaseViewModel {
    /**
     *
     * @param {Mshopproduct} model
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
        const product = this.model.getProduct();
        if (product) {
            object.Product = (new MproductViewModel(product)).toJson();
        }
    }

    /**
     * Model to json data
     * @return {{}}
     */
    async toJson(){
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.getId(),
            PurchasePrice: this.model.getPurchasePrice(),
            SellPrice: this.model.getSellPrice(),
            Stock: this.model.getStock(),
            DiscountType: this.model.getDiscountType(),
            DiscountValue: this.model.getDiscountValue(),
            IsFeatured: this.model.getIsFeatured(),
            IsActive: this.model.getIsActive(),
            Ordering: this.model.getOrdering(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MshopproductViewModel;
