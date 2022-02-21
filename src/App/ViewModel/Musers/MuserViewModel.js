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
    addResource(object) {
        let groupUserViewModel = null;
        if (this.model.getGroupuser() != null) {
            const groupuser = this.model.getGroupuser();
            groupUserViewModel = (new MgroupuserViewModel(groupuser)).toJson();
            object.Groupuser = groupUserViewModel;
        }
    }

    /**
     * Model to json data
     * @return {{}}
     */
    toJson() {
        if (this.model == null) {
            return null;
        }

        const json = {
            Id: this.model.Id,
            Username: this.model.Username,
        };

        if (this.getAutoAddResource()) {
            this.addResource(json);
        }

        return json;
    }
}

export default MuserViewModel;
