import Orm from "./Common/Orm";

export default {
    table: 'm_productcategories',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Mproducts: {
            type: '/App/Entity/Mproduct',
            isPrimitive: false,
            relationType: Orm.MANY_TO_ONE,
            mappedBy: 'Mproductcategory'
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
