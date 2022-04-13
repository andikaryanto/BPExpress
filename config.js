
const appRoot = require('app-root-path');
const dotenv =  require('dotenv');
dotenv.config();

var sourcePath = process.env.APP_MODE == 'production' ? 'dist' : 'src';
sourcePath = appRoot.path + '/' + sourcePath;

module.exports = { 
    sourcePath
}

