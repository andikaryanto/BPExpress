import M_users from "../../Models/M_users";
import BaseViewModel from "../BaseViewModel";

class MgroupuserViewModel extends BaseViewModel {

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
            GroupName: this.model.GroupName
        }
    }
}

export default MgroupuserViewModel;