import BaseEntity from './BaseEntity';
import Mproduct from './Mproduct';
import Mshop from './Mshop';

/**
 * @class Mshopproduct
 */
class Mshopproduct extends BaseEntity {
    Id;
    Mshop;
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
     * @return {Mshopproduct}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Mshop}
     */
    getMshop() {
        return this.Mshop;
    }

    /**
     *
     * @param {Mshop} Mshop
     * @return {Mshopproduct}
     */
    setMshop(Mshop) {
        this.Mshop = Mshop;
        return this;
    }

    /**
     *
     * @return {Mproduct}
     */
    getMproduct() {
        return this.Product;
    }

    /**
     *
     * @param {Mproduct} Product
     * @return {Mshopproduct}
     */
    setMproduct(Product) {
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
     * @return {Mshopproduct}
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
     * @return {Mshopproduct}
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
     * @return {Mshopproduct}
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
     * @return {Mshopproduct}
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
     * @return {Mshopproduct}
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
     * @return {Mshopproduct}
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
     * @return {Mshopproduct}
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
     * @return {Mshopproduct}
     */
    setOrdering(Ordering) {
        this.Ordering = Ordering;
        return this;
    }
}

export default Mshopproduct;
