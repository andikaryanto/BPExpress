import Orm from "./Common/Orm";

export default {
    table: 'm_districts',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Mcity: {
            type: '/App/Entity/Mcity',
            isPrimitive: false,
            foreignKey: 'M_City_Id',
            relationType: Orm.ONE_TO_MANY,
            inversedBy: 'Mdistricts'
        },
        Mvillages: {
            type: '/App/Entity/Mvillage',
            isPrimitive: false,
            relationType: Orm.MANY_TO_ONE,
            mappedBy: 'Mdistrict'
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
