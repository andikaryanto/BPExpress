import CronService from "../Services/CronService";
import Command from "../Utilities/Command";

/**
 * @class ResetCron
 */
class ResetCron extends Command {

    constructor(){
        super();
    }

    name(){
        return 'core:reset-cron';
    }

    description(){
        return 'Reset cron if any changing cron ';
    }

    execute(args){
        CronService.resetCron();  
    }

}

export default ResetCron;