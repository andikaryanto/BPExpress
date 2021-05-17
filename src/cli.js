#!/usr/bin/env node
require('@babel/register')({
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ]
    ]
});

const { option } = require('yargs');
const yargs = require("yargs");
const { default: Table } = require('./Core/Database/Table');

const options = yargs
    .option("n", { alias: "name", describe: "Name", type: "string", demandOption: false })
    .command("make:model", "Create Model", () => {
        console.log("one");
    }, (options) => {
        Promise.resolve(Table.makeModel(options.name));
        // console.log("hit");
    }).parse(process.argv.slice(2))
    .argv;

