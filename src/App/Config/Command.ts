import CreateUser from '../Commands/CreateUser';
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
            'create-user.command',
        ];
    }
}

export default Command;
