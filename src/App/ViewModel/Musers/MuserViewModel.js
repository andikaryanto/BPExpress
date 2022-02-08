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
        var groupuser = await this.model.M_Groupuser();
        object.Groupuser = await (new MgroupuserViewModel(groupuser)).toJson();
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