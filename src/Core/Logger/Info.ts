
import Logger from './Logger';
/**
 * @class Logger
 */
class Info extends Logger {
    /**
     * Create logs under Write/logs
     *
     * @param {string} fileName - will be saved under Write/logs
     * @param {string} message
     */
    static create(fileName: string, message: string) {
        super.create(fileName, 'info', message);
    }
}

export default Info;
