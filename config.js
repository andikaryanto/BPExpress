
const appRoot = require('app-root-path');
const dotenv =  require('dotenv');
const yaml = require('js-yaml');
const fs   = require('fs');
dotenv.config();

const parameters = yaml.load(fs.readFileSync(appRoot.path +  '/parameters/' + process.env.APP_MODE + '/parameters.yml', 'utf8'));

var sourcePath = appRoot.path + '/' + parameters.source_path;

module.exports = { 
    sourcePath,
    transportUsername: process.env.MAILER_USERNAME,
    transportPassword: process.env.MAILER_PASSWORD
}

