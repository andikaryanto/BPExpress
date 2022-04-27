import Orm from "./Common/Orm";

export default {
    table: 'm_canvassers',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Mvillage: {
            type: '/App/Entity/Mvillage',
            isPrimitive: false,
            foreignKey: 'M_Village_Id',
            relationType: Orm.ONE_TO_MANY,
            inversedBy: 'Mcanvasser'
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
