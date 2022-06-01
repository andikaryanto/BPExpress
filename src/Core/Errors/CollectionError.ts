/**
 * @class CollectionError
 */
class CollectionError extends Error {
    /**
     *
     * @param {string} message
     */
    constructor(message: string) {
        super(message);
    }

    /**
     * Get message
     * @return {string}
     */
    getMessage(): string {
        return this.message;
    }
}

export default CollectionError;
