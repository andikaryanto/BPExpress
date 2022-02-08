import BaseViewModel from "../BaseViewModel";

class MproductcategoryViewModel extends BaseViewModel {

    constructor(model) {
        super(true, model);
    }

    async addResource(object) {
        // object.Product = await this.model.M_Product();
    }

    async toJson() {
        
        if (this.model == null)
            return null;

        var json =  {
            Id: this.model.Id,
            Name: this.model.Name,
            Picture: this.model.Picture,
            Description: this.model.Description
        }
        
        if(this.getAutoAddResource()){
            await this.addResource(json)
        }

        return json;
    }
}

export default MproductcategoryViewModel;