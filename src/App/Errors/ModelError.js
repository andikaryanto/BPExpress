import Model from '../../Core/Model/Model';

/**
 * @class ModelError
 */
class ModelError extends Error {
    model = null;
    /**
     *
     * @param {string} message
     * @param {Model} model
     */
    constructor(message, model = null) {
        super(message);
        this.model = model;
    }
}

export default ModelError;
