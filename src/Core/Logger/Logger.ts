
import config from '../../config';
import Rollbar, {Configuration, Level} from 'rollbar';
/**
 * @class Logger
 */
class Logger {
    /**
     * Create logs under Write/logs
     *
     * @param {string} fileName - will be saved under Write/logs
     * @param {Level} level
     * @param {string} message
     */
    static create(fileName: string, level: Level, message: string) {
        if (config.useRollbarLogger) {
            const rollbar = new Rollbar({
                accessToken: config.rollbarAccessToken,
                captureUncaught: true,
                captureUnhandledRejections: true,
                logLevel: level,
                // fileName: fileName
                environment: config.environment,
            });

            rollbar.log(message);
        }

        if (config.environment == 'development') {
            const {createLogger, format, transports} = require('winston');
            const {combine, timestamp, label, printf} = format;
            const strlevel = level.toLowerCase();
            const myFormat = printf(({strlevel, message, label, timestamp}: any) => {
                return `${timestamp} [${label}] ${strlevel}: ${message}`;
            });

            const logger = createLogger(
                {
                    format: combine(
                        label({label: level}),
                        timestamp(),
                        myFormat,
                    ),
                    transports: [
                        new transports.File(
                            {
                                filename: config.sourcePath + '/Write/logs/'+fileName+'.log',
                                level,
                            },
                        ),
                    ],
                    myFormat,
                },
            );
            logger.log({
                level,
                message,

            });
        }
    }
}

export default Logger;
