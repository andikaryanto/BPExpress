/**
 * @class Command
 */
class Command {
    static REQUIRE_TYPE = 'require';
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
    addArgument(type, name, description) {
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
     * @param {[]} args
     * @return {any}
     */
    async execute(args) {

    }
}

export default Command;
