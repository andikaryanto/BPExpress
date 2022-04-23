import ResetCron from "../Command/ResetCron";

/**
 * @class Cron
 */
class Command {
  
    /**
     * Register crons class here, using class or container key
     * @return {[]}
     */
    static register() {
        return [
            ResetCron
        ];
    }
}

export default Command;
