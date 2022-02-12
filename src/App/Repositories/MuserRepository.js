
import M_users from "../Models/M_users";
import BaseRepository from "./BaseRespositoy";
/**
 * @class MuserRepository
 */
class MuserRepository extends BaseRepository{
    
    /**
     * @inheritdoc
     */
    getClass(){
        return M_users;
    }
}

export default MuserRepository;