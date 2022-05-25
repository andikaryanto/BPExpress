
import express, {Express} from 'express';
import dotenv from 'dotenv';
import Application from '../App/Config/Application';
dotenv.config();
/**
 * @class App
 */
class App {
    /**
     *
     * @param {Express} app
     * @param {any} express
     */
    static run(app : Express, express : any) {
        Application.init(app, express);
        app.listen(process.env.APP_PORT,
            () => console.log(`Server Up And Running. Listening On Port ${process.env.APP_PORT}. 
                Press Ctrl + C to kill` ),
        );
    }
}

export default App;
