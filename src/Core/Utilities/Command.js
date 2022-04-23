/**
 * @class Command
 */

class Command {

    #_arguments = [];

    constructor(){
       
    }

    addArgument(type, name, description){
        this.#_arguments.push({type, name, description});
    }

    getArguments(){
        return this.#_arguments;
    }

    /**
     * Name of command
     * @return {string}
     */
    name(){
        return '';
    }

    /**
     * Desscription of command
     * 
     * @return {string}
     */
    description(){
        return '';
    }

    execute(){

    }
}

export default Command;