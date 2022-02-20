
import Repository from '../../Core/Repository/Respository';
import Mgroupuser from '../Entity/Mgroupuser';
/**
 * @class MgroupuserRepository
 */
class MgroupuserRepository extends Repository {
    /**
     * @inheritdoc
     */
    constructor() {
        super(Mgroupuser)
    }
}

export default MgroupuserRepository;
