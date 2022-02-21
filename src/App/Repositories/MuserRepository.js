
import Repository from '../../Core/Repository/Repository';
import Mgroupuser from '../Entity/Mgroupuser';
import Muser from '../Entity/Muser';
import BaseRepository from './BaseRespositoy';
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
