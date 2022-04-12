
export default {
    table: 'm_villages',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        District: {
            type: '/App/Entity/Mdistrict',
            isPrimitive: false,
            foreignKey: 'M_District_Id',
            relationType: 'one_to_one',
        },
        Name: {
            type: 'string',
            isPrimitive: true,
        },
        Description: {
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