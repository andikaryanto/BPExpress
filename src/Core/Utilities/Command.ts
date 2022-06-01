/**
 * @class Command
 */
abstract class Command {
    static REQUIRE_TYPE = 'required';
    static OPTION_TYPE = 'option';

    protected arguments: any[] = [];

    /**
     *
     */
    constructor() {

    }

    /**
     *
     * @param {string} type
     * @param {string} name
     * @param {string} description
     */
    addArgument(type: string, name: string, description: string): void {
        const arg: any = {type, name, description};
        this.arguments.push(arg);
    }

    /**
     * get all current command
     * @return {[]}
     */
    getArguments(): any[] {
        return this.arguments;
    }

    /**
     * Name of command
     * @return {void}
     */
    abstract name(): void

    /**
     * Description of command
     *
     * @return {void}
     */
    abstract description(): void;

    /**
     *
     * @param {any} args
     * @return {void}
     */
    abstract execute(args: any): void
}

export default Command;
