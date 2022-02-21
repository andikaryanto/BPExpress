import Mcity from '../App/Entity/Mcity';
import Mfund from '../App/Entity/Mfund';
import Mproductcategory from '../App/Entity/Mproductcategory';
import Mprovince from '../App/Entity/Mprovince';
import Mvillage from '../App/Entity/Mvillage';

export default {
    table: 'm_shops',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Village: {
            type: Mvillage,
            isPrimitive: false,
            foreignKey: 'M_Village_Id',
            relationType: 'one_to_one',
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
            type: Mfund,
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
