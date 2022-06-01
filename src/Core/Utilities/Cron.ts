/**
 * @class Cron
 */
abstract class Cron {
    /**
     * Cron value
     * @return {void}
     */
    abstract time(): string;

    /**
     * Business logic that will be executed
     * @return {void}
     */
    abstract execute(): any;
}

export default Cron;
