import TestCron from "../Crons/TestCron";

class Cron {

    /**
     * State of enable or disable crons
     * @returns 
     */
    static enabled(){
        return true;
    }

    /**
     * Register crons class here, using class or container key
     * @returns 
     */
    static register() {
        return [
            // TestCron,
            // 'cron.testdi'
        ]
    }
}

export default Cron;