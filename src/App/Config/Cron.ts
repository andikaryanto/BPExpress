/**
 * @class Cron
 */
class Cron {
    /**
     * State of enable or disable crons
     * @return {boolean}
     */
    static enabled() {
        return true;
    }

    /**
     * Register crons class here, using class or container key
     * @return {[]}
     */
    static register(): any[] {
        return [
            'cron.testdi',
        ];
    }
}

export default Cron;
