import DateFormat from '../Libraries/DateFormat';
/**
 * @clas Seeds
 */
class Seeds {
    /**
      * Check if seed file was executed before,
      * its used to determine you will executed the seed again or not.
      * See in Seed folder as example
      *
      * @param {any} knex
      * @param {string} seedFileName
      * @return {boolean}
      */
    static async isSeedExist(knex, seedFileName) {
        return (await knex.table('seeds').where({name: seedFileName})).length > 0;
    }

    /**
      * Insert Seed File Batch to table 'seeds'
      *
      * @param {*} knex
      * @param {string} seedFileName
      */
    static async insertSeedBatch(knex, seedFileName) {
        await knex('seeds').insert({
            id: null,
            name: seedFileName,
            time: DateFormat.getCurrentDate('YYYY-MM-DD HH:mm:ss'),
        });
    }
}

export default Seeds;
