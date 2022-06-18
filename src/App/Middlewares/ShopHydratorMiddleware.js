import Hydrator from '../../Core/Middleware/Hydrator';
import MshopRepository from '../Repositories/MshopRepository';

/**
 * @class ShopHydratorMiddleware
 */
class ShopHydratorMiddleware extends Hydrator {
    /**
     * @var {MshopRepository} #_mshopRepository
     */
    #_mshopRepository;

    /**
     *
     * @param {MshopRepository} mshopRepository
     */
    constructor(
        mshopRepository,
    ) {
        super();
        this.#_mshopRepository = mshopRepository;
    }

    /**
     * @inheritdoc
     */
    async hidrate({request, params, next}) {
        const shopId = params.shopId;
        const shop = await this.#_mshopRepository.find(shopId);
        request.setResource(shop);
        next();
    }
}

export default ShopHydratorMiddleware;
