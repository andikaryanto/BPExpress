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
            rule: 'required|min:10',
        },
        Description: {
            type: 'string',
            isPrimitive: true,
            rule: 'required|min:10',
        },
        Created: {
            type: 'datetime',
            isPrimitive: true,
            rule: 'required',
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
