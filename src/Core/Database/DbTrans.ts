
import DbConnection from './Connection/DbConnection.js';

/**
 * @clas DbTrans
 */
class DbTrans {
    /**
     *
     * @return {Promise<Knex<any>>}
     */
    static beginTransaction() {
        return DbConnection.transaction();
    }
}
export default DbTrans;
