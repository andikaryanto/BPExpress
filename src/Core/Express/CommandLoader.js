import Command from '../../App/Config/Command';
import InstanceLoader from './InstanceLoader';
import CoreCommand from '../Config/Command';
import yargonaut from 'yargonaut';
import yargs from 'yargs';
import chalk from 'chalk';

/**
 * @class CommandLoader
 */
class CommandLoader {
    /**
     * load the exist command
     */
    static load() {
        let commands = Command.register();
        yargonaut.style('green');
        commands = [...commands, ...CoreCommand.register()];
        for (const command of commands) {
            const commandInstance = InstanceLoader.load(command);
            yargs.command(
                commandInstance.name(),
                commandInstance.description(),
                (yargs) => {
                    for (const argument of commandInstance.getArguments()) {
                        if (argument.type == 'required') {
                            yargs.require(argument.name);
                        } else {
                            yargs.option(argument.name);
                        }
                    }
                },
                (args) => {
                    commandInstance.execute(args);
                },
            )
                .help()
                .strict();
        }
        yargs.parse(process.argv.slice(2))
            .argv;
    }
}

export default CommandLoader;
