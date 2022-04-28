import Command from '../../Core/Utilities/Command';
import UserService from '../Services/UserService';

/**
 * @class TestCommand
 */
class CreateUser extends Command {
    /**
     * @var {UserService}
     */
    userService;

    /**
     *@param {UserService} userService
     */
    constructor(userService) {
        super();
        this.userService = userService;
        this.addArgument(Command.REQUIRE_TYPE, 'username', 'Username to be created');
        this.addArgument(Command.REQUIRE_TYPE, 'password', 'Password for the username');
        this.addArgument(Command.OPTION_TYPE, 'groupuserId', 'Group user of username');
    }

    /**
     *
     * @inheritdoc
     */
    name() {
        return 'create:user';
    }

    /**
     *
     * @inheritdoc
     */
    description() {
        return 'create a new username';
    }

    /**
     * @inheritdoc
     * @param {{}} args
     */
    async execute(args) {
        console.log('command is running...');

        const username = args.username;
        const password = args.password;
        await this.userService.createUser(username, password);
        console.log('User ' + username + ' is created');
    }
}

export default CreateUser;
