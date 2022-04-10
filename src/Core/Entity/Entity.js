import ORM from '../Database/ORM';
import magicMethodsProxy from '../Libraries/MagicMethod';
import appRoot from 'app-root-path';
import Repository from '../Repository/Repository';

/**
 * @class Entiry
 */
class Entity {

    constrains = {};

    /**
     *
     */
    constructor() {
        // return new Proxy(this, magicMethodsProxy);
        const handler = {
            get(target, prop, receiver) {
                var caller = prop.substring(0, 3);
                var property = prop.substring(3, prop.length);
                if(caller == 'get'){
                    var field = target.constructor.getProps()[property];
                    var type = require(appRoot + field.type).default;
                    var keyValue = target.constrains[field.foreignKey];
                    var repo = new Repository(type).find(keyValue);
                    target['set' + property](repo);
                }
                return target[prop];
            }
          };
        return new Proxy(this, handler);
    }

    __call(method, args, proxy) 
    {
        if (this.metadata[method] == undefined) {
            throw 'Method "'+method+'" is undefined';
        }

        this.metadata[method] = args[0];
        // again, it is important to return the proxy 
        // instead of the target
        return proxy;
    }

    /**
     * Get all props name
     * @return {[]}
     */
    static getProps() {
        return ORM.getProps(this.name);
    }

    /**
     * get Table Name
     * @return {string}
     */
    static getTable() {
        return ORM.getTable(this.name);
    }

    /**
     * GetP primary key field
     * @return {string}
     */
    static getPrimaryKey() {
        return ORM.getPrimaryKey(this.name);
    }

    /**
     * Get select columns
     * @return {{}}
     */
    static getSelectColumns() {
        const selectedColumn =[];
        const colums = this.getProps();
        for (const [key, value] of Object.entries(colums)) {
            if (value.isPrimitive) {
                selectedColumn.push(this.getTable() + '.' + key);
            } else {
                selectedColumn.push(this.getTable() + '.' + value.foreignKey);
            }
        }
        return selectedColumn;
    }
}

export default Entity;
