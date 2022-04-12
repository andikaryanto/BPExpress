import Muser from '../../Entity/Muser';
import BaseViewModel from '../BaseViewModel';
import MgroupuserViewModel from '../Mgroupuser/MgroupuserViewModel';
/**
 * @class MuserViewModel
 */
class MuserViewModel extends BaseViewModel {
    /**
     *
     * @param {Muser} model
     */
    constructor(model) {
        super(true, model);
    }

    /**
     *
     * @param {{}} object
     * @return {void}
     */
    async addResource(object) {
        const groupuser = await this.model.getGroupuser();
        let groupUserViewModel = await (new MgroupuserViewModel(groupuser)).toJson();
        object.Groupuser = groupUserViewModel;
    }

    /**
     * Model to json data
     * @return {Promise<{}> || Promise<null>}
     */
    async toJson(){
        if (this.model == null) {
            return null;
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
