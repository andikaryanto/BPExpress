import Orm from './Common/Orm';

export default {
    table: 'm_cities',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Mprovince: {
            type: '/App/Entity/Mprovince',
            isPrimitive: false,
            foreignKey: 'M_Province_Id',
            relationType: Orm.ONE_TO_MANY,
            inversedBy: 'Mcities',
        },
        Mdistricts: {
            type: '/App/Entity/Mdistrict',
            isPrimitive: false,
            relationType: Orm.MANY_TO_ONE,
            mappedBy: 'Mcity',
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
