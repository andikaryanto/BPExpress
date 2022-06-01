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
    name(): string {
        return 'core:reset-cron';
    }

    /**
     *
     * @inheritdoc
     */
    description(): string {
        return 'Reset cron if any changing cron ';
    }

    /**
     *
     * @inheritdoc
     */
    async execute(args: any): Promise<void> {
        CronService.resetCron();
    }
}

export default ResetCron;
