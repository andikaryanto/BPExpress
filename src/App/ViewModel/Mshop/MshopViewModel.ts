import M_shops from '../../Models/M_shops';
import BaseViewModel from '../BaseViewModel';

/**
 * @class MshopViewModel
 */
class MshopViewModel extends BaseViewModel {
    /**
     *
     * @param {M_shops} model
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
    async toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.Id,
            Name: this.model.Name,
            Owner: this.model.Owner,
            Phone: this.model.Phone,
            MapAddress: this.model.MapAddress,
            Address: this.model.Address,
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MshopViewModel;
