import ormMap from "../../orm";

class ORM {

    constructor() {
        
    }

    static getProps(key){
        const ormFields = ormMap.filter(x => x[key])[0][key].props;
        return ormFields;
    }

    static getTable(key){
        const table = ormMap.filter(x => x[key])[0][key].table;
        return table;
    }

    static getPrimaryKey(key){
        const table = ormMap.filter(x => x[key])[0][key].primaryKey;
        return table;
    }

    static get oneToMany(){
        return 'one to many';
    }
    static get oneToOne(){
        return 'one to one';
    }
    static get manyToMany(){
        return 'many to many';
    }

}

export default ORM;