import {Express} from 'express';
import dotenv from 'dotenv';
import appRoot from 'app-root-path';
dotenv.config({path: appRoot + '/.env'});
/**
 * @class View
 */
class View {
    /**
      *
      * @param {Express} app
      */
    static set(app) {
        const appMode = process.env.APP_MODE;
        const rootDir = appMode == 'production' ? '/build' : '/src';

        // app.set('view engine', 'pug');
        app.set('views', appRoot + rootDir + '/App/Views');
    }

    /**
      * Register functions and variables to be used in view
      * @return {{}}
      */
    static hook() {
        // current reserved variables are :
        // * csrfToken
        // * lang

        return {

            // ...


        };
    }
}
export default View;
