/**
 * @class CollectionError
 */
class CollectionError extends Error {
    #_message = '';

    /**
     *
     * @param {string} message
     */
    constructor(message) {
        super(message);
        this.#_message = message;
    }

    /**
     * Get message
     * @return {string}
     */
    getMessage() {
        return this.#_message;
    }
}

export default CollectionError;
