export default {
    table: 'm_productcategories',
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
        Description: {
            type: 'string',
            isPrimitive: true,
        },
        Picture: {
            type: 'srting',
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
