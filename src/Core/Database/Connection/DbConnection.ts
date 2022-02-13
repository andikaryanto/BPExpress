import conn from 'knex';
import database from '../../../App/Config/Database.js';
import dotenv from 'dotenv';
import TypeHelper from '../../Libraries/TypeHelper.js';
dotenv.config;

const appMode = TypeHelper.getString(process.env.APP_MODE);
let databaseCon = {};
if(appMode == 'production')
    databaseCon = database.production;
if(appMode == 'development')
    databaseCon = database.development;
if(appMode == 'staging')
    databaseCon = database.staging;

const DbConnection = conn(databaseCon);

export default DbConnection;
