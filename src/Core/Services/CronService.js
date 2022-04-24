import Cron from "../../App/Config/Cron";
import Container from "../Container/Container";
import nodeCron from 'node-cron';
import InstanceLoader from "../Express/InstanceLoader";

class CronService {

    /**
     * Reset Cron
     * @return {void}
     */
    static resetCron(){
        if (Cron.enabled()) {
            const crons = Cron.register();
            for (const crontab of crons) {
                const cronInstance = InstanceLoader.load(crontab);
                nodeCron.schedule(cronInstance.time(), async () => await cronInstance.execute());
            }
        }
    }
}
export default CronService;