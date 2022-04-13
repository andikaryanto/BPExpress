
import DbConnection from './Connection/DbConnection.js';

/**
 * @clas DbTrans
 */
class DbTrans {
    /**
     *
     * @return {Promise<Knex<any>>}
     */
    static async beginTransaction() {
        return DbConnection.transaction();
    }
}
export default DbTrans;
