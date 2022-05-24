
import Logger from './Logger';
/**
 * @class Logger
 */
class Critical extends Logger {
    /**
     * Create logs under Write/logs
     *
     * @param {string} fileName - will be saved under Write/logs
     * @param {string} message
     */
    static create(fileName, message) {
        super.create(fileName, 'Critical', message);
    }
}

export default Critical;
