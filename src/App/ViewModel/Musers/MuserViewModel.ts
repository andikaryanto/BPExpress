import M_users from '../../Models/M_users';
import BaseViewModel from '../BaseViewModel';
import MgroupuserViewModel from '../Mgroupuser/MgroupuserViewModel';
/**
 * @class MuserViewModel
 */
class MuserViewModel extends BaseViewModel {
    /**
     *
     * @param {M_users} model
     */
    constructor(model: M_users) {
        super(true, model);
    }

    /**
     *
     * @param {any} object
     * @return {Promise<void>}
     */
    async addResource(object: any): Promise<void> {
        let groupUserViewModel = null;
        if (this.model.M_Groupuser_Id != null) {
            const groupuser = await this.model.M_Groupuser();
            groupUserViewModel = await (new MgroupuserViewModel(groupuser)).toJson();
            object.Groupuser = groupUserViewModel;
        }
    }

    /**
     * Model to json data
     * @return {Promise<{}>}
     */
    async toJson(): Promise<{}> {
        if (this.model == null) {
            return {};
        }

        const json = {
            Id: this.model.Id,
            Username: this.model.Username,
        };

        if (this.getAutoAddResource()) {
            await this.addResource(json);
        }

        return json;
    }
}

export default MuserViewModel;
