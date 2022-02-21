import Mgroupuser from '../../Entity/Mgroupuser';
import BaseViewModel from '../BaseViewModel';
/**
 * @class MgroupuserViewModel
 */
class MgroupuserViewModel extends BaseViewModel {
    /**
     *
     * @param {Mgroupuser} model
     */
    constructor(model) {
        super(true, model);
    }

    /**
     *
     * @param {{}} object
     */
    addResource(object) {

    }

    /**
     *
     * @return {{}}
     */
    toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.getId(),
            GroupName: this.model.getGroupName(),
        };

        if (this.getAutoAddResource()) {
            this.addResource(json);
        }
        return json;
    }
}

export default MgroupuserViewModel;
