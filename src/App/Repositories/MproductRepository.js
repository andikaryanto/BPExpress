import Repository from '../../Core/Repository/Repository';
import Mproduct from '../Entity/Mproduct';
/**
 * @class MproductRepository
 */
class MproductRepository extends Repository {
    /**
     * @inheritdoc
     */

     constructor() {
        super(Mproduct);
    }
}

export default MproductRepository;
