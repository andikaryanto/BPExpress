import Mshop from '../../Entity/Mshop';
import M_shops from '../../Models/M_shops';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';
import MshopproductCollection from '../Mshopproduct/MshopproductCollection';

/**
 * @class MshopViewModel
 */
class MshopViewModel extends BaseViewModel {
    /**
     *
     * @param {Mshop} entity
     */
    constructor(entity) {
        super(true, entity);
    }

    /**
     *
     * @param {{}} object
     * @return {void}
     */
    async addResource(object) {
        object.Shopproducts = 
            await (new MshopproductCollection(await this.entity?.getMshopproducts()))
                .proceedAndGetData();
    }

    /**
     * Model to json data
     * @return {{}}
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
