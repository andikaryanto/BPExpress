import {Express} from 'express';
import config from '../../../config';
/**
 * @class View
 */
class View {
    /**
      *
      * @param {Express} app
      */
    static set(app: Express) {
        app.set('view engine', 'pug');
        app.set('views', config.sourcePath + '/App/Views');
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
