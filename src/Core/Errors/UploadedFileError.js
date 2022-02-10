/**
 * @class UploadedFileError
 */
class UploadedFileError extends Error {
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
     * Get error message
     * @return {string}
     */
    getMessage() {
        return this.#_message;
    }
}

export default UploadedFileError;
