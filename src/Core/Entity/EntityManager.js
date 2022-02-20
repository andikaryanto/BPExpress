import ORM from "../Database/ORM";
import Db from '../Database/Connection/DbConnection.js';

class EntityManager {

    entity;
    db;

    constructor(entity){
        this.entity = entity;
        this.db = Db.table(this.getTable())
    }

    /**
     * Get all props name
     * @returns 
     */
    getProps(){
        return ORM.getProps(this.entity.constructor.name);
    }

    /**
     * get Table Name
     * @returns {string}
     */
    getTable(){
        return ORM.getTable(this.entity.constructor.name);
    }

}

export default EntityManager;