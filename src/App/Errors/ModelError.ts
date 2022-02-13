import Model from '../../Core/Model/Model';

/**
 * @class ModelError
 */
class ModelError extends Error {
    private model?: Model;
    /**
     *
     * @param {string} message
     * @param {Model} model
     */
    constructor(message: string, model?: Model) {
        super(message);
        this.model = model;
    }
}

export default ModelError;
