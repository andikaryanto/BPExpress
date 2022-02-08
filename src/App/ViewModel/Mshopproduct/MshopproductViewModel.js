import BaseViewModel from "../BaseViewModel";
import MproductViewModel from "../Mproduct/MproductViewModel";

class MshopproductViewModel extends BaseViewModel {

    constructor(model) {
        super(true, model);
    }

    async addResource(object) {
        var product = await this.model.M_Product();
        object.Product = await (new MproductViewModel(product)).toJson();
    }

    async toJson() {
        
        if (this.model == null)
            return null;

        var json = {
            Id: this.model.Id,
            M_Shop_Id: this.model.M_Shop_Id,
            PurchasePrice: this.model.PurchasePrice,
            SellPrice: this.model.SellPrice,
            Stock: this.model.Stock,
            DiscountType: this.model.DiscountType,
            DiscountValue: this.model.DiscountValue,
            IsFeatured: this.model.IsFeatured,
            IsActive: this.model.IsActive,
            Ordering: this.model.Ordering
        }

        if(this.getAutoAddResource()){
            await this.addResource(json)
        }
        
        return json;
    }
}

export default MshopproductViewModel;