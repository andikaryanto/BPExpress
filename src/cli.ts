#!/usr/bin/env node
require('@babel/register')({
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
});

const yargs = require('yargs');
const {default: Controller} = require('./Core/Controller/Controller');
const {default: Table} = require('./Core/Database/Table');

yargs
    .option('n', {alias: 'name', describe: 'Name', type: 'string', demandOption: false})
    .option('p', {alias: 'path', describe: 'Path', type: 'string', demandOption: false})
// make model
    .command('make:model', 'Create Model', () => {
        console.log('one');
    }, (options: any) => {
        Table.makeModel(options.name);
    })

// make controller
    .command('make:controller', 'Create Controller', () => {
        console.log('one');
    }, (options: any) => {
        Controller.makeController(options.path, options.name);
    })

    .parse(process.argv.slice(2))
    .argv;
