import M_products from "../Models/M_products";
import M_shops from "../Models/M_shops";
import BaseRepository from "./BaseRespositoy";
/**
 * @class MproductRepository
 */
class MproductRepository extends BaseRepository{
    
    /**
     * @inheritdoc
     */
    getClass(){
        return M_products;
    }
}

export default MproductRepository;