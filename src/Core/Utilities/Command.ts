/**
 * @class Command
 */
class Command {
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
    addArgument(type: string, name: string, description: string) {
        const arg: any = {type, name, description};
        this.arguments.push(arg);
    }

    /**
     * get all current command
     * @return {[]}
     */
    getArguments() {
        return this.arguments;
    }

    /**
     * Name of command
     * @return {string}
     */
    name() {
        return '';
    }

    /**
     * Description of command
     *
     * @return {string}
     */
    description() {
        return '';
    }

    /**
     *
     * @param {any} args
     * @return {any}
     */
    async execute(args: any) {

    }
}

export default Command;
