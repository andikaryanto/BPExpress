export default {
    table: 'm_groupusers',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true
        },
        GroupName: {
            type: 'string',
            isPrimitive: true
        },
        Description: {
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
