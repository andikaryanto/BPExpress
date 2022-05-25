// import Routes from "./Routes";
import dotenv from 'dotenv';
import ExpressOverride from './ExpressOverride';
import View from './View';
import {Express} from 'express';
import config from '../../../config';
const path = require('path');
dotenv.config();
/**
 * @class Application
 */
class Application {
    /**
     *
     * @param {Express} app
     * @param {any} express
     */
    static init(app: Express, express: any) {
        Application.global(app, express);
        Application.set(app);
        Application.override(app);
    }

    /**
     *
     * @param {Express} app
     */
    static set(app: Express) {
        View.set(app);
    }

    /**
     *
     * @param {Express} app
     */
    static override(app: Express) {
        ExpressOverride.override(app);
    }

    /**
     *
     * @param {any} app
     * @param {any} express
     */
    static global(app: any, express: any) {
        app.use('/assets', express.static(path.resolve(config.sourcePath + '/', 'assets')));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
    }
}
export default Application;
