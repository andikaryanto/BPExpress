import M_shops from "../Models/M_shops";
import BaseRepository from "./BaseRespositoy";
/**
 * @class MshopRepository
 */
class MshopRepository extends BaseRepository{
    
    /**
     * @inheritdoc
     */
    getClass(){
        return M_shops;
    }
}

export default MshopRepository;