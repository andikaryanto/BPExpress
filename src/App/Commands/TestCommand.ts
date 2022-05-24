import Command from '../../Core/Utilities/Command';

/**
 * @class TestCommand
 */
class TestCommand extends Command {
    /**
     *
     */
    constructor() {
        super();
        this.addArgument('required', 'name', 'the name of argument');
    }

    /**
     *
     * @inheritdoc
     */
    name() {
        return 'test:logic';
    }

    /**
     *
     * @inheritdoc
     */
    description() {
        return 'Test Logic TO TEST';
    }

    /**
     * @inheritdoc
     * @param {[]} args
     */
    async execute(args) {
        console.log('args', args);
        console.log('command executed');
    }
}

export default TestCommand;
