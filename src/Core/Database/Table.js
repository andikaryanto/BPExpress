import Collection from "../Libraries/Collection";

class Table {

     #_table = null;
     #_currentColumn = {};
     #_columns = null;

     constructor(table){
          this.#_table = table;
          this.#_columns = new Collection([]);
     }

     getColumns(){
          return this.#_columns;
     }

     getTable(){
          return this.#_table;
     }

     /**
      * 
      * @param {string} type 
      * @param {string} length 
      * @param {string} column 
      * @param {boolean} autoIncrement 
      * @returns {Table}
      */
     column(type, length, column, autoIncrement = false){
          this.#_currentColumn = {
               type : type,
               length : length,
               column : column,
               autoIncrement : autoIncrement
          }

          this.#_columns.add(this.#_currentColumn);

          return this;
     }

     /**
      * 
      * @param {string} column 
      * @param {bollean} autoIncrement 
      * @returns {Table}
      */
     integer(column, autoIncrement = false){     
          this.column("INT", "11", column, autoIncrement);
          return this;
     }

     /**
      * 
      * @param {string} column 
      * @param {bollean} autoIncrement 
      * @returns {Table}
      */
      smallInteger(column, autoIncrement = false){     
          this.column("SMALLINT", "11", column, autoIncrement);
          return this;
     }

     /**
      * 
      * @param {string} column 
      * @param {bollean} autoIncrement 
      * @returns {Table}
      */
      tinyInteger(column, autoIncrement = false){     
          this.column("TINYINT", "11", column, autoIncrement);
          return this;
     }

     /**
      * 
      * @param {string} column 
      * @param {bollean} autoIncrement 
      * @returns {Table}
      */
      dateTme(column){     
          this.column("DATETIME", "0", column);
          return this;
     }

     /**
      * 
      * @param {string} column 
      * @param {string} length 
      * @returns {Table}
      */
     string(column, length){     
          this.column("VARCHAR", length, column);
          return this;
     }

     /**
      * 
      * @param {string} column 
      * @param {string} length 
      * @returns {Table}
      */
      text(column){     
          this.column("TEXT", "0", column);
          return this;
     }

     /**
      * nullable column
      * @returns {Table}
      */
     nullable(){
          this.#_currentColumn.nullable = true;
          return this;
     }

     static string10(){
          return '10';
     }


     static string50(){
          return '50';
     }

     static string100(){
          return '100';
     }

     static string250(){
          return '250';
     }

     static string300(){
          return '300';
     }

     static string500(){
          return '500';
     }

     static string1000(){
          return '1000';
     }

}

export default Table;