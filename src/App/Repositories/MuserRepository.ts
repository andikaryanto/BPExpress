
import Repository from '../../Core/Repository/Repository';
import Muser from '../Entity/Muser';
/**
 * @class MuserRepository
 */
class MuserRepository extends Repository<Muser> {
    /**
     *
     */
    constructor() {
        super(Muser);
    }
}

export default MuserRepository;
