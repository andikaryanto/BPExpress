import CronService from '../Services/CronService';
import Command from '../Utilities/Command';

/**
 * @class ResetCron
 */
class ResetCron extends Command {
    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     * @inheritdoc
     */
    name() {
        return 'core:reset-cron';
    }

    /**
     *
     * @inheritdoc
     */
    description() {
        return 'Reset cron if any changing cron ';
    }

    /**
     *
     * @inheritdoc
     */
    async execute(args) {
        CronService.resetCron();
    }
}

export default ResetCron;
