import BaseCollection from "../BaseCollection";
import MshopViewModel from "./MshopViewModel";

class MshopCollection extends BaseCollection {

    constructor(collection) {
        super(collection);
    }

    async shape(model) {;
        await this.addItem(new MshopViewModel(model));
    }

}

export default MshopCollection;