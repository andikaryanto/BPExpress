import Logger from './Logger';

/**
 * @class Logger
 */
class Error extends Logger {
    /**
     * Create logs under Write/logs
     *
     * @param {string} fileName - will be saved under Write/logs
     * @param {string} message
     */
    static create(fileName: string, message: string) {
        super.create(fileName, 'error', message);
    }
}

export default Error;
