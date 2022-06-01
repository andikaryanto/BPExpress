import Mshopproduct from '../../Entity/Mshopproduct';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';
import MproductViewModel from '../Mproduct/MproductViewModel';

/**
 * @clas MshopproductViewModel
 */
class MshopproductViewModel extends BaseViewModel<Mshopproduct> {
    /**
     *
     * @param {Mshopproduct} entity
     */
    constructor(entity: Mshopproduct) {
        super(true, entity);
    }

    /**
     *
     * @param {{}} object
     * @return {void}
     */
    async addResource(object: any) {
        const product = await this.entity.getMproduct();
        if (product) {
            object.Product = await (new MproductViewModel(product)).toJson();
        }
    }

    /**
     * Model to json data
     * @return {Promise<{}>}
     */
    async toJson() {
        if (this.entity == null) {
            return null;
        }

        const json = {
            Id: this.entity.getId(),
            PurchasePrice: this.entity.getPurchasePrice(),
            SellPrice: this.entity.getSellPrice(),
            Stock: this.entity.getStock(),
            DiscountType: this.entity.getDiscountType(),
            DiscountValue: this.entity.getDiscountValue(),
            IsFeatured: this.entity.getIsFeatured(),
            IsActive: this.entity.getIsActive(),
            Ordering: this.entity.getOrdering(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MshopproductViewModel;
