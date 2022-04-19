import Orm from './Common/Orm';

export default {
    table: 'm_groupusers',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Musers: {
            type: '/App/Entity/Muser',
            isPrimitive: false,
            relationType: Orm.MANY_TO_ONE,
            mappedBy: 'Mgroupuser',
        },
        GroupName: {
            type: 'string',
            isPrimitive: true,
        },
        Description: {
            type: 'string',
            isPrimitive: true,
        },
        Created: {
            type: 'datetime',
            isPrimitive: true,
        },
        CreatedBy: {
            type: 'string',
            isPrimitive: true,
        },
        Modified: {
            type: 'datetime',
            isPrimitive: true,
        },
        ModifiedBy: {
            type: 'string',
            isPrimitive: true,
        },
    },
};
