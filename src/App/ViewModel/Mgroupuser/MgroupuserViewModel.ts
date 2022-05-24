import Mgroupuser from '../../Entity/Mgroupuser';
import BaseViewModel from '../../../Core/ViewModel/ViewModel';
import MuserViewModel from '../Musers/MuserViewModel';
import MuserCollection from '../Musers/MuserCollection';
/**
 * @class MgroupuserViewModel
 */
class MgroupuserViewModel extends BaseViewModel {

    private entity: Mgroupuser;
    /**
     *
     * @param {Mgroupuser} entity
     */
    constructor(entity: Mgroupuser) {
        super(true, entity);
    }

    /**
     *
     * @param {any} object
     */
    async addResource(object: any) {

    }

    /**
     *
     * @return {Promise<{}>}
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
