import BaseViewModel from '../../../Core/ViewModel/ViewModel';
import Muser from '../../Entity/Muser';
import MgroupuserViewModel from '../Mgroupuser/MgroupuserViewModel';
/**
 * @class MuserViewModel
 */
class MuserViewModel extends BaseViewModel {

    private entity: Muser;
    /**
     *
     * @param {Muser} entity
     */
    constructor(entity: Muser) {
        super(true, entity);
    }

    /**
     *
     * @param {any} object
     * @return {Promise<void>}
     */
    async addResource(object: any) {
        const groupuser = await this.entity.getMgroupuser();
        const groupUserViewModel = await (new MgroupuserViewModel(groupuser)).toJson();
        object.Groupuser = groupUserViewModel;
    }

    /**
     * Model to json data
     * @return {Promise<{}>|Promise<null>}
     */
    async toJson() {
        if (this.entity == null) {
            return null;
        }

        const json = {
            Id: this.entity.Id,
            Username: this.entity.Username,
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MuserViewModel;
