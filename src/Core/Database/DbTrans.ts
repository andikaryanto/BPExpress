
import DbConnection from './Connection/DbConnection';

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
