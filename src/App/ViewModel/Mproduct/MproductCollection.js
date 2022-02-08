import BaseCollection from "../BaseCollection";
import MproductViewModel from "./MproductViewModel";

class MproductCollection extends BaseCollection {

    constructor(collection) {
        super(collection);
    }

    async shape(model) {;
        await this.addItem(new MproductViewModel(model));
    }

}

export default MproductCollection;