import AppOverride from '../../Core/Express/AppOverride';
import {Express} from 'express';
/**
 * @class ExpressOverride
 */
class ExpressOverride {
    /**
      * You can override express request and response by
      * setting this prop of request or reponse.
      * Before you override the prop you make,
      * better check what reserved props are,
      * so you wont change crucial existing prop.
      *
      * read more about express API override http://expressjs.com/en/guide/overriding-express-api.html
      * @param {Express} app
      */
    static override(app: Express) {
        AppOverride.override(app);
    }
}

export default ExpressOverride;
