export default {
    table: 'm_shopproducts',
    primaryKey: 'Id',
    props: {
        Id: {
            type: 'number',
            isPrimitive: true,
        },
        Shop: {
            type: 'src/App/Entity/Mshop',
            isPrimitive: false,
            foreignKey: 'M_Shop_Id',
            relationType: 'one_to_one',
        },
        Product: {
            type: 'src/App/Entity/Mproduct',
            isPrimitive: false,
            foreignKey: 'M_Product_Id',
            relationType: 'one_to_one',
        },
        PurchasePrice: {
            type: 'decimal',
            isPrimitive: true,
        },
        SellPrice: {
            type: 'decimal',
            isPrimitive: true,
        },
        Stock: {
            type: 'number',
            isPrimitive: true,
        },
        DiscountType: {
            type: 'number',
            isPrimitive: true,
        },
        DiscountType: {
            type: 'number',
            isPrimitive: true,
        },
        DiscountValue: {
            type: 'decimal',
            isPrimitive: true,
        },
        IsFeatured: {
            type: 'boolean',
            isPrimitive: true,
        },
        IsActive: {
            type: 'boolean',
            isPrimitive: true,
        },
        Ordering: {
            type: 'number',
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
