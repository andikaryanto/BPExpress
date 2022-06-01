import ResetCron from '../Command/ResetCron';

/**
 * @class Cron
 */
class Command {
    /**
     * Register crons class here, using class or container key
     * @return {any[]}
     */
    static register(): any[] {
        return [
            ResetCron,
        ];
    }
}

export default Command;
