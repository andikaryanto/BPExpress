import Mgroupuser from "../App/Entity/Mgroupuser";

export default {
    table: 'm_users',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true
        },
        Groupuser: {
            type: Mgroupuser,
            isPrimitive: false,
            foreignKey: 'M_Groupuser_Id',
            relationType: 'one_to_one'
        },
        Username: {
            type: 'string',
            isPrimitive: true
        },
        Password: {
            type: 'string',
            isPrimitive: true
        },
        IsLoggedIn: {
            type: 'boolean',
            isPrimitive: true
        },
        IsActive: {
            type: 'boolean',
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