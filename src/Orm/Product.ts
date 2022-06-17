import Orm from './Common/Orm';

export default {
    table: 'm_products',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Mproductcategory: {
            type: '/App/Entity/Mproductcategory',
            isPrimitive: false,
            foreignKey: 'M_Productcategory_Id',
            relationType: Orm.ONE_TO_MANY,
        },
        Name: {
            type: 'string',
            isPrimitive: true,
        },
        Description: {
            type: 'string',
            isPrimitive: true,
        },
        Price: {
            type: 'float',
            isPrimitive: true,
        },
        Producer: {
            type: 'string',
            isPrimitive: true,
        },
        PackSize: {
            type: 'string',
            isPrimitive: true,
        },
        Quality: {
            type: 'string',
            isPrimitive: true,
        },
        Picture: {
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