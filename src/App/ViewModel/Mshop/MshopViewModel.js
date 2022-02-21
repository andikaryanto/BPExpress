import Mshop from '../../Entity/Mshop';
import M_shops from '../../Models/M_shops';
import BaseViewModel from '../BaseViewModel';

/**
 * @class MshopViewModel
 */
class MshopViewModel extends BaseViewModel {
    /**
     *
     * @param {Mshop} model
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

    }

    /**
     * Model to json data
     * @return {{}}
     */
    toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.getId(),
            Name: this.model.getName(),
            Owner: this.model.getOwner(),
            Phone: this.model.getPhone(),
            MapAddress: this.model.getMapAddress(),
            Address: this.model.getAddress(),
        };

        if (this.getAutoAddResource()) {
            this.addResource(json);
        }

        return json;
    }
}

export default MshopViewModel;
