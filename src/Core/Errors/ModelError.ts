import Model from '../Model/Model';

/**
 * @class ModelError
 */
class ModelError extends Error {
    #_message = null;
    #_model = null;

    /**
     *
     * @param {string} message
     * @param {Model} model
     */
    constructor(message, model = null) {
        super(message);
        this.#_message = message;
        this.#_model = model;
    }

    /**
     * Get error message
     * @return {string}
     */
    getMessage() {
        return this.#_message;
    }

    /**
     * Get model instance
     * @return {Model}
     */
    getModel() {
        return this.#_model;
    }
}

export default ModelError;
