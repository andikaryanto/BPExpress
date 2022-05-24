import BaseEntity from './BaseEntity';
import Mproduct from './Mproduct';
import Mshop from './Mshop';

/**
 * @class Mshopproduct
 */
class Mshopproduct extends BaseEntity {
    protected Id: number|string|undefined;
    protected Mshop: Mshop|undefined;
    protected Mproduct: Mproduct|undefined;
    protected PurchasePrice: number|undefined;
    protected SellPrice: number|undefined;
    protected Stock: number|undefined;
    protected DiscountType: number|undefined;
    protected DiscountValue: number|undefined;
    protected IsFeatured: boolean|undefined;
    protected IsActive: boolean|undefined;
    protected Ordering: number|undefined;

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
    setId(Id: number|string) {
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
    setMshop(Mshop: Mshop) {
        this.Mshop = Mshop;
        return this;
    }

    /**
     *
     * @return {Mproduct}
     */
    getMproduct() {
        return this.Mproduct;
    }

    /**
     *
     * @param {Mproduct} Mproduct
     * @return {Mshopproduct}
     */
    setMproduct(Mproduct: Mproduct) {
        this.Mproduct = Mproduct;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getPurchasePrice() {
        return this.PurchasePrice;
    }

    /**
     *
     * @param {number} PurchasePrice
     * @return {Mshopproduct}
     */
    setPurchasePrice(PurchasePrice: number) {
        this.PurchasePrice = PurchasePrice;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getSellPrice() {
        return this.SellPrice;
    }

    /**
     *
     * @param {number} SellPrice
     * @return {Mshopproduct}
     */
    setSellPrice(SellPrice: number) {
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
    setStock(Stock: number) {
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
    setDiscountType(DiscountType: number) {
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
    setDiscountValue(DiscountValue: number) {
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
    setIsFeatured(IsFeatured: boolean) {
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
    setIsActive(IsActive: boolean) {
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
    setOrdering(Ordering: number) {
        this.Ordering = Ordering;
        return this;
    }
}

export default Mshopproduct;
