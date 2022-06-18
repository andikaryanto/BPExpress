import Controller from '../../../Core/Controller/Controller';
import EntityUnit from '../../../Core/Entity/EntityUnit';
import ResponseCode from '../../Constants/ResponseCode';
import MproductRepository from '../../Repositories/MproductRepository';
import SuccessResponse from '../../Responses/SuccessResponse';
import MproductViewModel from '../../ViewModel/Mproduct/MproductViewModel';

/**
 * @class ProductController
 */
class ProductController extends Controller {
    /**
     * @var {EntityUnit} #_entityUnit
     */
    #_entityUnit;

    /**
     * @var {MproductRepository} #_mproductRepository
     */
    #_mproductRepository;

    /**
     *
     * @param {EntityUnit} entityUnit
     * @param {MproductRepository} mproductRepository
     */
    constructor(
        entityUnit,
        mproductRepository,
    ) {
        super();
        this.#_entityUnit = entityUnit;
        this.#_mproductRepository = mproductRepository;
    }

    /**
     * 
     * @param {*} param0 
     * @return {SuccessResponse}
     */
    async store({body}) {
        const product = this.#_mproductRepository.newEntity();
        product.setName(body.name)
            .setDescription(body.description)
            .setPrice(body.price)
            .setProducer(body.producer)
            .setPackSize(body.pack_size)
            .setQuality(body.quality);

        this.#_entityUnit.preparePersistence(product);
        await this.#_entityUnit.flush();

        const productViewModel = new MproductViewModel(product);

        return new SuccessResponse('OK', ResponseCode.OK, productViewModel);
    }
}

export default ProductController;
