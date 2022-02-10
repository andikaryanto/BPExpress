import M_users from "../../Models/M_users";
import BaseViewModel from "../BaseViewModel";
import MgroupuserViewModel from "../Mgroupuser/MgroupuserViewModel";

class MuserViewModel extends BaseViewModel {

    model = null;

    constructor(model){
        super(true);
        this.model = model;
    }

    async addResource(object){
        var groupUserViewModel = null;
        if(this.model.M_Groupuser_Id != null){
            var groupuser = await this.model.M_Groupuser();
            groupUserViewModel = await (new MgroupuserViewModel(groupuser)).toJson();
            object.Groupuser = groupUserViewModel;
        }
    }

    async toJson(){

        if (this.model == null)
            return null;

        var json = {
            Id : this.model.Id,
            Username : this.model.Username
        }

        if(this.getAutoAddResource()){
            await this.addResource(json)
        }

        return json;
    }
}

export default MuserViewModel;