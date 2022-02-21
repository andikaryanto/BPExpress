import BaseEntity from './BaseEntity';
import Mproduct from './Mproduct';
import Mshop from './Mshop';

/**
 * @class Mshopproduct
 */
class Mshopproduct extends BaseEntity {
    Id;
    Shop;
    Product;
    PurchasePrice;
    SellPrice;
    Stock;
    DiscountType;
    DiscountValue;
    IsFeatured;
    IsActive;
    Ordering;

    /**
     *
     * @return {number|string}
     */
    getId() {
        return this.Id;
    }

    /**
     *
     * @param {number|string} Id
     * @return {this}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Mshop}
     */
    getShop() {
        return this.Shop;
    }

    /**
     *
     * @param {Mshop} Shop
     * @return {this}
     */
    setShop(Shop) {
        this.Shop = Shop;
        return this;
    }

    /**
     *
     * @return {Mproduct}
     */
    getProduct() {
        return this.Product;
    }

    /**
     *
     * @param {Mproduct} Product
     * @return {this}
     */
    setProduct(Product) {
        this.Product = Product;
        return this;
    }

    /**
     *
     * @return {float}
     */
    getPurchasePrice() {
        return this.PurchasePrice;
    }

    /**
     *
     * @param {float} PurchasePrice
     * @return {this}
     */
    setPurchasePrice(PurchasePrice) {
        this.PurchasePrice = PurchasePrice;
        return this;
    }

    /**
     *
     * @return {float}
     */
    getSellPrice() {
        return this.SellPrice;
    }

    /**
     *
     * @param {float} SellPrice
     * @return {this}
     */
    setSellPrice(SellPrice) {
        this.SellPrice = SellPrice;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getStock() {
        return this.Stock;
    }

    /**
     *
     * @param {number} Stock
     * @return {this}
     */
    setStock(Stock) {
        this.Stock = Stock;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getDiscountType() {
        return this.DiscountType;
    }

    /**
     *
     * @param {number} DiscountType
     * @return {this}
     */
    setDiscountType(DiscountType) {
        this.DiscountType = DiscountType;
        return this;
    }

    /**
     *
     * @return {float | number}
     */
    getDiscountValue() {
        return this.DiscountValue;
    }

    /**
     *
     * @param {float | number} DiscountValue
     * @return {this}
     */
    setDiscountValue(DiscountValue) {
        this.DiscountValue = DiscountValue;
        return this;
    }

    /**
     *
     * @return {boolean}
     */
    getIsFeatured() {
        return this.IsFeatured;
    }

    /**
     *
     * @param {boolean} IsFeatured
     * @return {this}
     */
    setIsFeatured(IsFeatured) {
        this.IsFeatured = IsFeatured;
        return this;
    }

    /**
     *
     * @return {boolean}
     */
    getIsActive() {
        return this.IsActive;
    }

    /**
     *
     * @param {boolean} IsActive
     * @return {this}
     */
    setIsActive(IsActive) {
        this.IsActive = IsActive;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getOrdering() {
        return this.Ordering;
    }

    /**
     *
     * @param {number} Ordering
     * @return {this}
     */
    setOrdering(Ordering) {
        this.Ordering = Ordering;
        return this;
    }
}

export default Mshopproduct;
