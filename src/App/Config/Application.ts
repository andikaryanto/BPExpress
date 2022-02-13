// import Routes from "./Routes";
import dotenv from 'dotenv';
import ExpressOverride from './ExpressOverride';
import View from './View';
import express, {Express} from 'express';
import appRoot from 'app-root-path';
import { CoercedVariableValues } from 'graphql/execution/values';
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
    static init(app: Express, express: Express) {
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
     * @param {Express} app
     * @param {express} express
     */
    static global(app: Express, express: any) {
        app.use('/assets', express.static(path.resolve(appRoot.path+'/src/', 'assets')));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
    }
}
export default Application;
