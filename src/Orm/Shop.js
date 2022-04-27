import Orm from "./Common/Orm";

export default {
    table: 'm_shops',
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
            inversedBy: "Mshop"
        },
        Mshoproducts: {
            type: '/App/Entity/Mshopproduct',
            isPrimitive: false,
            relationType: Orm.MANY_TO_ONE,
            mappedBy: 'Mshop'
        },
        Name: {
            type: 'string',
            isPrimitive: true,
        },
        Owner: {
            type: 'string',
            isPrimitive: true,
        },
        Phone: {
            type: 'string',
            isPrimitive: true,
        },
        PIN: {
            type: 'string',
            isPrimitive: true,
        },
        MapAddress: {
            type: 'string',
            isPrimitive: true,
        },
        Address: {
            type: 'string',
            isPrimitive: true,
        },
        FrontShopPicture: {
            type: 'string',
            isPrimitive: true,
        },
        IdentityCardPicture: {
            type: 'string',
            isPrimitive: true,
        },
        OwnerPicture: {
            type: 'string',
            isPrimitive: true,
        },
        CanvasserPicture: {
            type: 'string',
            isPrimitive: true,
        },
        AccountNumber: {
            type: 'string',
            isPrimitive: true,
        },
        AccountNumberPicture: {
            type: 'string',
            isPrimitive: true,
        },
        Latitude: {
            type: 'string',
            isPrimitive: true,
        },
        Longitude: {
            type: 'string',
            isPrimitive: true,
        },
        Fund: {
            type: '/App/Entity/Mfund',
            isPrimitive: false,
            foreignKey: 'M_Fund_Id',
            relationType: 'one_to_one',
        },
        Status: {
            type: 'string',
            isPrimitive: true,
        },
        HasDelivery: {
            type: 'boolean',
            isPrimitive: true,
        },
        IsOpen: {
            type: 'boolean',
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
