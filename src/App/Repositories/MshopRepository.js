import Repository from '../../Core/Repository/Repository';
import Mshop from '../Entity/Mshop';
/**
 * @class MshopRepository
 */
class MshopRepository extends Repository {
    
    constructor() {
        super(Mshop);
    }
}

export default MshopRepository;
