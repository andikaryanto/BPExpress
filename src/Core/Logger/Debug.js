
import Logger from './Logger';
/**
 * @class Logger
 */
class Debug extends Logger {
    /**
     * Create logs under Write/logs
     *
     * @param {string} fileName - will be saved under Write/logs
     * @param {string} message
     */
    static create(fileName, message) {
        super.create(fileName, 'Debug', message);
    }
}

export default Debug;
