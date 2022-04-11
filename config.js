
import appRoot from 'app-root-path';
import dotenv from 'dotenv';
dotenv.config();

var sourcePath = process.env.APP_MODE == 'production' ? 'dist' : 'src';
sourcePath = appRoot.path + '/' + sourcePath;

export default {
    sourcePath
}
