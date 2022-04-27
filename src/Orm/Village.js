import Orm from "./Common/Orm";

export default {
    table: 'm_villages',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Mcanvassers: {
            type: '/App/Entity/Mcanvasser',
            isPrimitive: false,
            relationType: Orm.MANY_TO_ONE,
            mappedBy: 'Mvillage'
        },
        Mshops: {
            type: '/App/Entity/Shop',
            isPrimitive: false,
            relationType: Orm.MANY_TO_ONE,
            mappedBy: 'Mvillage'
        },
        District: {
            type: '/App/Entity/Mdistrict',
            isPrimitive: false,
            foreignKey: 'M_District_Id',
            relationType: Orm.ONE_TO_MANY,
            inversedBy: 'Mvillages'
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
