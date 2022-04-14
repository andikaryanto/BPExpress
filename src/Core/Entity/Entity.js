import ORM from '../Database/ORM';
import Repository from '../Repository/Repository';
import config from '../../../config';
import Orm from '../../Orm/Common/Orm';
import EntityLooper from './EntityLooper';
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
                const caller = prop.substring(0, 3);
                const property = prop.substring(3, prop.length);
                if (caller == 'get') {
                    const field = target.constructor.getProps()[property];
                    if (!field.isPrimitive) {
                        const type = require(config.sourcePath + field.type).default;
                        const keyValue = target.constrains[field.foreignKey];
                        const originalMethod = target[prop];
                        return async function(...args) {
                            if (field.relationType == Orm.ONE_TO_MANY) {
                                const result = target[prop]();
                                if (result) {
                                    return result;
                                }

                                const looper = EntityLooper.getInstance(target.constructor.name);
                                if (looper.hasEntityList()) {
                                    const entitylist = looper.getEntityList();
                                    const primaryKey = ORM.getPrimaryKey(type.name);
                                    if (PlainObject.isEmpty(looper.getItems())) {
                                        const param = {
                                            whereIn: {
                                                [primaryKey]: entitylist.getAssociatedKey()[field.foreignKey],
                                            },
                                        };

                                        const entities = await (new Repository(type)).findAll(param);
                                        let items = {};
                                        for (const entity of entities) {
                                            const getFn = 'get' + primaryKey;
                                            const pkValue = entity[getFn]();
                                            items = {...items, [pkValue]: entity};
                                        }
                                        looper.setItems(items);
                                    }
                                    let result = null;
                                    const itemOfLooper = looper.getItems();
                                    if (!PlainObject.isEmpty(itemOfLooper)) {
                                        if (!PlainObject.isEmpty(target.constrains)) {
                                            const keyValue = target.constrains[field.foreignKey];
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
                                    if (keyValue) {
                                        const repo = await (new Repository(type)).find(keyValue);
                                        target['set' + property](repo);
                                    }
                                }
                            } else if (field.relationType == Orm.MANY_TO_ONE) {
                                if (keyValue) {
                                    const param = {
                                        where: {
                                            [field.foreignKey]: keyValue,
                                        },
                                    };
                                    const repo = await (new Repository(type)).findAll(param);
                                    target['set' + property](repo);
                                }
                            } else {
                                if (keyValue) {
                                    const repo = await (new Repository(type)).find(keyValue);
                                    target['set' + property](repo);
                                }
                            }
                            return await originalMethod.apply(this, args);
                        };
                    }
                }
                return target[prop];
            },
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

    /**
     *
     * @return {Promise<{}>}
     */
    async toJson() {
        const object = {};
        const entity = this;
        const getProps = ORM.getProps(entity.constructor.name);
        for (const [key, value] of Object.entries(getProps)) {
            const getProp = 'get' + key;
            const propValue = entity[getProp]();
            if (value.isPrimitive) {
                object[key] = propValue;
            } else {
                const related = await propValue;
                if (related) {
                    const primaryKey = ORM.getPrimaryKey(related.constructor.name);
                    const getPrimary = 'get' + primaryKey;
                    const pkValue = related[getPrimary]();
                    object[value.foreignKey] = pkValue;
                } else {
                    object[value.foreignKey] = null;
                }
            }
        }
        return object;
    }
}

export default Entity;
