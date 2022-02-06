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
        object.Groupuser = (new MgroupuserViewModel(groupuser)).toJson();
    }

    toJson(){
        return {
            Id : this.model.Id,
            Username : this.model.Username
        }
    }
}

export default MuserViewModel;