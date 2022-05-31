import Repository from '../../Core/Repository/Repository';
import Mshopproduct from '../Entity/Mshopproduct';
/**
 * @class MshopRepository
 */
class MshopProductRepository extends Repository<Mshopproduct> {
    /**
     * @inheritdoc
     */
    constructor() {
        super(Mshopproduct);
    }
}

export default MshopProductRepository;
