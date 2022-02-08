import BaseCollection from "../BaseCollection";
import MshopproductViewModel from "./MshopproductViewModel";

class MshopproductCollection extends BaseCollection {

    constructor(collection) {
        super(collection);
    }

    async shape(model) {;
        await this.addItem(new MshopproductViewModel(model));
    }

}

export default MshopproductCollection;