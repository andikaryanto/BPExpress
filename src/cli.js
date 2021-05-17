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
    .option("m", { alias: "make", describe: "Make Migration / Seeder", type: "string", demandOption: false })
    .option("n", { alias: "name", describe: "Name", type: "string", demandOption: false })
    .option("d", { alias: "migrate", describe: "Migrate Database", type: "string", demandOption: false })
    .command("make:model", "Create Model", () => {
        console.log("one");
    }, (options) => {
        console.log(Table.makeModel(options.name, successMessage => {
            console.log(successMessage);
        }, errMessage => {
            console.log(errMessage);
        }));
    })
    .argv;

