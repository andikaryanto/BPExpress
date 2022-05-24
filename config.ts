
const appRoot = require('app-root-path');
const dotenv =  require('dotenv');
const yaml = require('js-yaml');
const fs   = require('fs');
dotenv.config();

const parameters = yaml.load(fs.readFileSync(appRoot.path +  '/parameters/' + process.env.APP_MODE + '/parameters.yml', 'utf8'));

var sourcePath = appRoot.path + '/' + parameters.source_path;

export default { 
    environment: parameters.mode,
    sourcePath,
    rollbarAccessToken: parameters.rollbar_access_token,
    transportUsername: parameters.transporter_username,
    transportPassword: parameters.transporter_passsword,
    transportPort: parameters.transporter_port,
    transportHost: parameters.transporter_host,
    useRollbarLogger: parameters.use_rollbar_logger,

}

