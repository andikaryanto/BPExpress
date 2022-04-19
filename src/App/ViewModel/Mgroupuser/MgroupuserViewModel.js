import Mgroupuser from '../../Entity/Mgroupuser';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';
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
    async addResource(object) {

    }

    /**
     *
     * @return {{}}
     */
    async toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.getId(),
            GroupName: this.model.getGroupName(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }
        return json;
    }
}

export default MgroupuserViewModel;
