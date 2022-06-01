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


const {default: config} = require('./config');
const {default: database} = require(config.sourcePath + '/App/Config/Database');
module.exports = database;
