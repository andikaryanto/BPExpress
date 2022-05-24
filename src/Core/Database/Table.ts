import DbConnection from './Connection/DbConnection';
import fs from 'fs';
import StringLib from '../Libraries/StringLib';
import config from '../../../config';
/**
 * Class Table
 */
class Table {
    /**
      * get table colum info
      * @param {string} tableName
      */
    static async columnInfo(tableName) {
        return await DbConnection.table(tableName).columnInfo();
    }

    /**
     * Create Model file with intended table
     * @param {string} tableName
     */
    static async makeModel(tableName) {
        const modelName = StringLib.ucFirst(tableName);
        const actualColumns = await Table.columnInfo(tableName);
        const columns = Object.keys(actualColumns);
        let props = '';
        columns.forEach((e, i) => {
            props += `\n\t${e} = null;`;
        });

        const content = function() {
            return `import Model from "../../Core/Model/Model.js";
               \nclass ${modelName} extends Model {
                    ${props}
                    \n\tconstructor() { \n\t\tsuper("${tableName}", "Id");\n\t}
               \n}
               \nexport default ${modelName};`;
        };

        const fileName = config.sourcePath + '/App/Models/${modelName}';
        fs.open(fileName, 'r', function(err, fd) {
            if (err) {
                fs.writeFile(fileName, content(), function(err) {
                    if (err) throw err;
                    // console.log('Saved!');
                });
            } else {
                throw new Error('File is already exist !');
            }
        });
    }
}

export default Table;
