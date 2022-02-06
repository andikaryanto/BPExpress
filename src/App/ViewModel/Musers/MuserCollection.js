import BaseCollection from "../BaseCollection";
import MuserViewModel from "./MuserViewModel";

class MuserCollection extends BaseCollection {

    constructor(collection) {
        super(collection);
    }

    async shape(model) {;
        await this.addItem(new MuserViewModel(model));
    }

}

export default MuserCollection;