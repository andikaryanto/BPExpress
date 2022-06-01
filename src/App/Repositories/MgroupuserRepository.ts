
import Repository from '../../Core/Repository/Repository';
import Mgroupuser from '../Entity/Mgroupuser';
/**
 * @class MgroupuserRepository
 */
class MgroupuserRepository extends Repository<Mgroupuser> {
    /**
     * @inheritdoc
     */
    constructor() {
        super(Mgroupuser);
    }
}

export default MgroupuserRepository;
