/**
 * @class Cron
 */
abstract class Cron {
    /**
     * Cron value
     * @return {string}
     */
    abstract time(): string;

    /**
     * Business logic that will be executed
     * @return {any}
     */
    abstract execute(): any;
}

export default Cron;
