import M_groupusers from '../../Models/M_groupusers';
import M_users from '../../Models/M_users';
import BaseViewModel from '../BaseViewModel';
/**
 * @class MgroupuserViewModel
 */
class MgroupuserViewModel extends BaseViewModel {
    /**
     *
     * @param {M_groupusers} model
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
            Id: this.model.Id,
            GroupName: this.model.GroupName,
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }
        return json;
    }
}

export default MgroupuserViewModel;
