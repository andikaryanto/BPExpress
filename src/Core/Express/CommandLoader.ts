import Command from '../../App/Config/Command';
import UtilCommand from '../Utilities/Command';
import InstanceLoader from './InstanceLoader';
import CoreCommand from '../Config/Command';
import yargonaut from 'yargonaut';
import yargs from 'yargs';
import ContainerLoader from '../Container/ContainerLoader';

/**
 * @class CommandLoader
 */
class CommandLoader {
    /**
     * load the exist command
     */
    static load() {
        ContainerLoader.load();
        let commands = Command.register();
        yargonaut.style('green');
        commands = [...commands, ...CoreCommand.register()];
        for (const command of commands) {
            const commandInstance = InstanceLoader.load(command);
            yargs.command(
                commandInstance.name(),
                commandInstance.description(),
                (yargs) => {
                    const requireArgs = [];
                    for (const argument of commandInstance.getArguments()) {
                        if (argument.type == UtilCommand.REQUIRE_TYPE) {
                            requireArgs.push(argument.name);
                        }
                        yargs.option(argument.name, {
                            describe: argument.description,
                        });
                    }
                    yargs.demandOption(requireArgs);
                },
                (args) => {
                    commandInstance.execute(args);
                },
            )
                .help()
                .strict();
        }
        yargs
            .parse(process.argv.slice(2))
            .argv;
    }
}

export default CommandLoader;
