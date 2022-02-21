import Trait from '../../Core/Traits/Trait';
/**
 * @class Cast
 */
class Cast extends Trait {
    /**
     *
     * @param {*} model
     * @param {*} options
     */
    register(model, options = {}) {
        //     for(const [key, value] of Object.entries(options)){
        model.prototype.Is = true;

        //     }
    }
}

export default Cast;
