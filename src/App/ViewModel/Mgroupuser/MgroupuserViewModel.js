import Mgroupuser from '../../Entity/Mgroupuser';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';
/**
 * @class MgroupuserViewModel
 */
class MgroupuserViewModel extends BaseViewModel {
    /**
     *
     * @param {Mgroupuser} entity
     */
    constructor(entity) {
        super(true, entity);
    }

    /**
     *
     * @param {{}} object
     */
    async addResource(object) {
        // object.Users = await this.entity.getMusers();
    }

    /**
     *
     * @return {{}}
     */
    async toJson() {
        if (this.entity == null) {
            return null;
        }

        const json = {
            Id: this.entity.getId(),
            GroupName: this.entity.getGroupName(),
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }
        return json;
    }
}

export default MgroupuserViewModel;
