
import Repository from '../../Core/Repository/Repository';
import Muser from '../Entity/Muser';
/**
 * @class MuserRepository
 */
class MuserRepository extends Repository {
    /**
     *
     */
    constructor() {
        super(Muser);
    }
}

export default MuserRepository;
