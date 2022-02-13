import M_shopproducts from '../../Models/M_shopproducts';
import BaseViewModel from '../BaseViewModel';
import MproductViewModel from '../Mproduct/MproductViewModel';

/**
 * @clas MshopproductViewModel
 */
class MshopproductViewModel extends BaseViewModel {
    /**
     *
     * @param {M_shopproducts} model
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
        const product = await this.model.M_Product();
        object.Product = await (new MproductViewModel(product)).toJson();
    }

    /**
     * Model to json data
     * @return {{}}
     */
    async toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.Id,
            M_Shop_Id: this.model.M_Shop_Id,
            PurchasePrice: this.model.PurchasePrice,
            SellPrice: this.model.SellPrice,
            Stock: this.model.Stock,
            DiscountType: this.model.DiscountType,
            DiscountValue: this.model.DiscountValue,
            IsFeatured: this.model.IsFeatured,
            IsActive: this.model.IsActive,
            Ordering: this.model.Ordering,
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MshopproductViewModel;
