/**
 * @class Command
 */
class Command {
    static REQUIRE_TYPE = 'required';
    static OPTION_TYPE = 'option';

    #_arguments = [];

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
        this.#_arguments.push({type, name, description});
    }

    /**
     * get all current command
     * @return {[]}
     */
    getArguments() {
        return this.#_arguments;
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
