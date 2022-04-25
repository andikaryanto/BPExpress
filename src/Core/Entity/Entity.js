import ORM from '../Database/ORM';
import Repository from '../Repository/Repository';
import config from '../../../config';
import Orm from '../../Orm/Common/Orm';
import EntityLooper from './EntityLooper';
import PlainObject from '../Libraries/PlainObject';
import DateFormat from '../Libraries/DateFormat';

/**
 * @class Entiry
 */
class Entity {
    constrains = {};
    rules = {};

    /**
     *
     */
    constructor() {
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
                        const primaryKey = ORM.getPrimaryKey(type.name);
                        return async function(...args) {
                            const result = target[prop]();
                            if (result) {
                                return result;
                            }
                            if (field.relationType == Orm.ONE_TO_MANY) {
                                const looper = EntityLooper.getInstance(target.constructor.name);
                                if (looper.hasEntityList()) {
                                    const entitylist = looper.getEntityList();
                                    if (PlainObject.isEmpty(looper.getItems())) {
                                        const param = {
                                            whereIn: {
                                                [primaryKey]: entitylist.getAssociatedKey()[field.foreignKey],
                                            },
                                        };

                                        const looper = EntityLooper.getInstance(target.constructor.name);
                                        if (looper.hasEntityList()) {
                                            const entitylist = looper.getEntityList();
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
                                        const targetProps = ORM.getProps(type.name);
                                        const primaryKeyValue = target['get' + primaryKey]();
                                        const foreignKey = targetProps[field.mappedBy].foreignKey;
                                        if (primaryKeyValue) {
                                            const param = {
                                                where: {
                                                    [foreignKey]: primaryKeyValue,
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
                                }
                            } else if (field.relationType == Orm.MANY_TO_ONE) {
                                const targetProps = ORM.getProps(type.name);
                                const primaryKeyValue = target['get' + primaryKey]();
                                const foreignKey = targetProps[field.mappedBy].foreignKey;
                                if (primaryKeyValue) {
                                    const param = {
                                        where: {
                                            [foreignKey]: primaryKeyValue,
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
                            const returnedData = await originalMethod.apply(this, args);
                            if (returnedData == undefined) {
                                return null;
                            }
                            return returnedData;
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
                if (value.relationType == Orm.ONE_TO_MANY) {
                    selectedColumn.push(this.getTable() + '.' + value.foreignKey);
                }
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
                if (value.type == 'datetime') {
                    if (propValue) {
                        object[key] = DateFormat.databaseDate(propValue);
                    } else {
                        object[key] = propValue;
                    }
                } else {
                    object[key] = propValue;
                }
            } else {
                const related = await propValue;
                if (value.relationType == Orm.ONE_TO_MANY) {
                    if (related) {
                        const primaryKey = ORM.getPrimaryKey(related.constructor.name);
                        const getPrimary = 'get' + primaryKey;
                        const pkValue = related[getPrimary]();
                        object[value.foreignKey] = pkValue;
                    } else {
                        object[value.foreignKey] = null;
                    }
                } else if(value.relationType == Orm.ONE_TO_ONE){
                    
                }
            }
        }
        return object;
    }

    /**
     * Set rule to validate objec of e entity
     * @param {string} key
     * @param {string} rule
     * @return {Entity}
     */
    setRule(key, rule) {
        this.rules = {...this.rules, [key]: rule};
        return this;
    }

    /**
     * Get rules
     * @return {[]}
     */
    getRules() {
        return this.rules;
    }
}

export default Entity;
