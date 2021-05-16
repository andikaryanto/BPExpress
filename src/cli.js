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
const options = yargs
 .option("m", { alias: "make", describe: "Make Migration / Seeder", type: "string", demandOption: false })
 .option("n", { alias: "name", describe: "Name", type: "string", demandOption: false })
 .option("d", { alias: "migrate", describe: "Migrate Database", type: "string", demandOption: false })
 .argv;
