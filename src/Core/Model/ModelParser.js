import ORM from "../Database/ORM";

class ModelParser {

    model;

    constructor(model){
        this.model = model;
    }

    parse(rowResult){

        const newClassName = this.model.constructor;
        const obj = new newClassName();
        const ormFields = this.getOrmPropsName();
        for (const [key, value] of Object.entries(ormFields)) {
            // const found = Object.keys(this.#_cast).find((keys) => keys == key);
            // if (found) {
            //     obj[key] = Cast.to(value, this.#_cast[key]);
            // } else {
                if(value.isPrimitive)
                    obj[key] = rowResult[key];
                else {
                    const classRelated = value.type;
                    let relatedClassName = eval(`${classRelated}`);
                    let relatedInstance = new relatedClassName();
                    const relatedParam = {
                        where: {
                            Id: rowResult[value.foreignKey]
                        }
                    }
                    let relatedValue = relatedInstance.fetch(relatedParam);
                    obj[key] = relatedValue;
                }
            // }
        }
    }

    getOrmPropsName(){
        const ormFields = ORM.getByKey(this.model.constructor.name);
        return ormFields;
    }

}

export default ModelParser;