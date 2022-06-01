import Mshop from '../../Entity/Mshop';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';
import MshopproductCollection from '../Mshopproduct/MshopproductCollection';

/**
 * @class MshopViewModel
 */
class MshopViewModel extends BaseViewModel<Mshop> {
    /**
     *
     * @param {Mshop} entity
     */
    constructor(entity: Mshop) {
        super(true, entity);
    }

    /**
     *
     * @param {{}} object
     * @return {void}
     */
    async addResource(object: any) {
        const shopProducts = await this.entity?.getMshopproducts();
        if (shopProducts) {
            const Shopproducts = await (new MshopproductCollection(shopProducts))
                .proceedAndGetData();
            object.Shopproducts = Shopproducts;
        }
    }

    /**
     * Model to json data
     * @return {Promise<{}>|Promise<null>}
     */
    async toJson() {
        if (this.entity == null) {
            return null;
        }

        const json = {
            Id: this.entity.getId(),
            Name: this.entity.getName(),
            Owner: this.entity.getOwner(),
            Phone: this.entity.getPhone(),
            MapAddress: this.entity.getMapAddress(),
            Address: this.entity.getAddress(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MshopViewModel;
