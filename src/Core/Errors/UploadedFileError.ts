/**
 * @class UploadedFileError
 */
class UploadedFileError extends Error {
    /**
     *
     * @param {string} message
     */
    constructor(message: string) {
        super(message);
    }

    /**
     * Get error message
     * @return {string}
     */
    getMessage(): string {
        return this.message;
    }
}

export default UploadedFileError;
