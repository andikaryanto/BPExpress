import M_users from "../../Models/M_users";
import BaseViewModel from "../BaseViewModel";
import MproductcategoryViewModel from "../Mproductcategory/MproductcategoryViewModel";

class MproductViewModel extends BaseViewModel {

    constructor(model) {
        super(true, model);
    }

    async addResource(object) {
        var category = await this.model.M_Productcategory();
        object.ProductCategory = await (new MproductcategoryViewModel(category)).toJson();
    }

    async toJson() {
        
        if (this.model == null)
            return null;

        var json = {
            Id: this.model.Id,
            M_Productcategory_Id: this.model.M_Productcategory_Id,
            Name: this.model.Name,
            Description: this.model.Description,
            Producer: this.model.Producer,
            PackSize: this.model.PackSize,
            Quality: this.model.Quality,
            Picture: this.model.Picture
        }

        if(this.getAutoAddResource()){
            await this.addResource(json)
        }
        return json;
    }
}

export default MproductViewModel;