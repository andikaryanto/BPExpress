import BaseCollection from "../BaseCollection";
import MproductcategoryViewModel from "./MproductcategoryViewModel";

class MproductcategoryCollection extends BaseCollection {

    constructor(collection) {
        super(collection);
    }

    async shape(model) {;
        await this.addItem(new MproductcategoryViewModel(model));
    }

}

export default MproductcategoryCollection;