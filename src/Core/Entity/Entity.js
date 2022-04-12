import ORM from '../Database/ORM';
import Repository from '../Repository/Repository';
import config from '../../../config';
import Orm from '../../Orm/Common/Orm';
import EntityLooper from './EntiityLooper';
import PlainObject from '../Libraries/PlainObject';

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
            get: (target, prop, receiver) => {
                var caller = prop.substring(0, 3);
                var property = prop.substring(3, prop.length);
                if (caller == 'get') {
                    var field = target.constructor.getProps()[property];
                    if (!field.isPrimitive) {
                        const originalMethod = target[prop];
                        return async function (...args) {
                            if (field.relationType == Orm.ONE_TO_MANY) {

                                var type = require(config.sourcePath + field.type).default;
                                var keyValue = target.constrains[field.foreignKey];
                                var result = target[prop]();
                                if (result)
                                    return result;

                                var looper = EntityLooper.getInstance(target.constructor.name);
                                if (looper.hasEntityList()) {
                                    var entitylist = looper.getEntityList();
                                    var primaryKey = ORM.getPrimaryKey(type.name);
                                    if (PlainObject.isEmpty(looper.getItems())) {
                                        var param = {
                                            whereIn: {
                                                [primaryKey]: entitylist.getAssociatedKey()[field.foreignKey]
                                            }
                                        };

                                        var entities = await (new Repository(type)).findAll(param);
                                        var items = {};
                                        for (const entity of entities) {
                                            var getFn = 'get' + primaryKey;
                                            var pkValue = entity[getFn]();
                                            items = {...items, [pkValue] : entity };
                                        }
                                        looper.setItems(items);
                                    }
                                    var result = null;
                                    var itemOfLooper = looper.getItems();
                                    if (!PlainObject.isEmpty(itemOfLooper)) {
                                        if (!PlainObject.isEmpty(target.constrains)) {
                                            var keyValue = target.constrains[field.foreignKey];
                                            if (keyValue in itemOfLooper) {
                                                result = itemOfLooper[keyValue];
                                            }
                                        }
                                    }

                                    if (looper.isLastIndex()) {
                                        looper.clean();
                                    }

                                    if (result != null) {
                                        target['set' + property](result);
                                    }
                                } else {
                                    var repo = new Repository(type).find(keyValue);
                                    target['set' + property](repo);
                                }
                            } else {
                                var param = {
                                    where: {
                                        [field.foreignKey]: keyValue
                                    }
                                }
                                var repo = new Repository(type).findAll(param);
                                target['set' + property](repo);
                            }
                            return await originalMethod.apply(this, args);
                        }
                    }
                }
                return target[prop];
            }
        };
        return new Proxy(this, handler);
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
        const selectedColumn = [];
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
