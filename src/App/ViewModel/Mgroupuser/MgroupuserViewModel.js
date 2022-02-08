import M_users from "../../Models/M_users";
import BaseViewModel from "../BaseViewModel";

class MgroupuserViewModel extends BaseViewModel {

    constructor(model) {
        super(true, model);
    }

    async addResource(object) {

    }

    async toJson() {
        
        if (this.model == null)
            return null;
            
        var json = {
            Id: this.model.Id,
            GroupName: this.model.GroupName
        }

        if(this.getAutoAddResource()){
            await this.addResource(json)
        }
        return json;
    }
}

export default MgroupuserViewModel;