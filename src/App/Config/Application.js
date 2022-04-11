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
     * @param {express} express
     */
    static init(app, express) {
        Application.global(app, express);
        Application.set(app);
        Application.override(app);
    }

    /**
     *
     * @param {Express} app
     */
    static set(app) {
        View.set(app);
    }

    /**
     *
     * @param {Express} app
     */
    static override(app) {
        ExpressOverride.override(app);
    }

    /**
     *
     * @param {Express} app
     * @param {express} express
     */
    static global(app, express) {
        app.use('/assets', express.static(path.resolve(config.sourcePath + '/', 'assets')));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
    }
}
export default Application;
