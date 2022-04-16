import Orm from './Common/Orm';

export default {
    table: 'm_users',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Mgroupuser: {
            type: '/App/Entity/Mgroupuser',
            isPrimitive: false,
            foreignKey: 'M_Groupuser_Id',
            relationType: Orm.ONE_TO_MANY,
        },
        Username: {
            type: 'string',
            isPrimitive: true,
        },
        Password: {
            type: 'string',
            isPrimitive: true,
        },
        IsLoggedIn: {
            type: 'boolean',
            isPrimitive: true,
        },
        IsActive: {
            type: 'boolean',
            isPrimitive: true,
        },
        Created: {
            type: 'string',
            isPrimitive: true,
        },
        CreatedBy: {
            type: 'string',
            isPrimitive: true,
        },
        Modified: {
            type: 'string',
            isPrimitive: true,
        },
        ModifiedBy: {
            type: 'string',
            isPrimitive: true,
        },
    },
};
