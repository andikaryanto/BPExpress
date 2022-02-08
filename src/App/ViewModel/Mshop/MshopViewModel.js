import M_users from "../../Models/M_users";
import BaseViewModel from "../BaseViewModel";

class MshopViewModel extends BaseViewModel {

    constructor(model) {
        super(true, model);
    }

    async addResource(object) {

    }

    toJson() {
        
        if (this.model == null)
            return null;
            
        return {
            Id: this.model.Id,
            Name: this.model.Name,
            Owner: this.model.Owner,
            Phone: this.model.Phone,
            MapAddress: this.model.MapAddress,
            Address: this.model.Address
        }
    }
}

export default MshopViewModel;