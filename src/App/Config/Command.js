import TestCommand from '../Commands/TestCommand';

/**
 * @class Cron
 */
class Command {
    /**
     * Register crons class here, using class or container key
     * @return {[]}
     */
    static register() {
        return [
            TestCommand,
        ];
    }
}

export default Command;
