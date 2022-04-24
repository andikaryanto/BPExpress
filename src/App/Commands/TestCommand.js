import Command from '../../Core/Utilities/Command';

/**
 * @class TestCommand
 */
class TestCommand extends Command {
    constructor() {
        super();
        this.addArgument('required', 'name', 'the name of argument');
    }

    name() {
        return 'test:logic';
    }

    description() {
        return 'Test Logic TO TEST';
    }

    async execute(args) {
        console.log('args', args);
        console.log('command executed');
    }
}

export default TestCommand;
