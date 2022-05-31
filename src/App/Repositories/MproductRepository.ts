import Repository from '../../Core/Repository/Repository';
import Mproduct from '../Entity/Mproduct';
/**
 * @class MproductRepository
 */
class MproductRepository extends Repository<Mproduct> {
    /**
     * @inheritdoc
     */
    constructor() {
        super(Mproduct);
    }
}

export default MproductRepository;
