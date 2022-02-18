import M_shopproducts from '../Models/M_shopproducts';
import M_shops from '../Models/M_shops';
import BaseRepository from './BaseRespositoy';
/**
 * @class MshopRepository
 */
class MshopProductRepository extends BaseRepository {
    /**
     * @inheritdoc
     */
    getClass() {
        return M_shopproducts;
    }
}

export default MshopProductRepository;
