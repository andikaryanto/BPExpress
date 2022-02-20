export default {
    table: 'm_canvassers',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Name: {
            type: 'string',
            isPrimitive: true,
        },
        Email: {
            type: 'string',
            isPrimitive: true,
        },
        Phone: {
            type: 'string',
            isPrimitive: true,
        },
        Supervisor: {
            type: 'string',
            isPrimitive: true,
        },
        Address: {
            type: 'string',
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
