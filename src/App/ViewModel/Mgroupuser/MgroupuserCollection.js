import BaseCollection from "../BaseCollection";
import MgroupuserViewModel from "./MgroupuserViewModel";

class MgroupuserCollection extends BaseCollection {

    constructor(collection) {
        super(collection);
    }

    async shape(model) {;
        await this.addItem(new MgroupuserViewModel(model));
    }

}

export default MgroupuserCollection;