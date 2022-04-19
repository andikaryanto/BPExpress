
const appRoot = require('app-root-path');
const dotenv =  require('dotenv');
dotenv.config();

var sourcePath = process.env.APP_MODE == 'production' ? 'dist' : 'src';
sourcePath = appRoot.path + '/' + sourcePath;

module.exports = { 
    sourcePath,
    transportUsername: '5c3ee8f5eafaad',
    transportPassword: '05e9b56731288e'

}

