import Mcity from "../App/Entity/Mcity";
import Mprovince from "../App/Entity/Mprovince";

export default {
    table: 'm_funds',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true
        },
        Name: {
            type: 'string',
            isPrimitive: true
        },
        Description: {
            type: 'string',
            isPrimitive: true
        },
        Value: {
            type: 'string',
            isPrimitive: true
        },
        Created: {
            type: 'string',
            isPrimitive: true
        },
        CreatedBy: {
            type: 'string',
            isPrimitive: true
        },
        Modified: {
            type: 'string',
            isPrimitive: true
        },
        ModifiedBy: {
            type: 'string',
            isPrimitive: true
        }
    }
}
