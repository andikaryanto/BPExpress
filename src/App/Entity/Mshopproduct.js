import BaseEntity from './BaseEntity';

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

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;
        return this;
    }

    getShop() {
        return this.Shop;
    }

    setShop(Shop) {
        this.Shop = Shop;
        return this;
    }

    getProduct() {
        return this.Product;
    }

    setProduct(Product) {
        this.Product = Product;
        return this;
    }

    getPurchasePrice() {
        return this.PurchasePrice;
    }

    setPurchasePrice(PurchasePrice) {
        this.PurchasePrice = PurchasePrice;
        return this;
    }

    getSellPrice() {
        return this.SellPrice;
    }

    setSellPrice(SellPrice) {
        this.SellPrice = SellPrice;
        return this;
    }

    getStock() {
        return this.Stock;
    }

    setStock(Stock) {
        this.Stock = Stock;
        return this;
    }

    getDiscountType() {
        return this.DiscountType;
    }

    setDiscountType(DiscountType) {
        this.DiscountType = DiscountType;
        return this;
    }

    getDiscountValue() {
        return this.DiscountValue;
    }

    setDiscountValue(DiscountValue) {
        this.DiscountValue = DiscountValue;
        return this;
    }

    getIsFeatured() {
        return this.IsFeatured;
    }

    setIsFeatured(IsFeatured) {
        this.IsFeatured = IsFeatured;
        return this;
    }

    getIsActive() {
        return this.IsActive;
    }

    setIsActive(IsActive) {
        this.IsActive = IsActive;
        return this;
    }

    getOrdering() {
        return this.Ordering;
    }

    setOrdering(Ordering) {
        this.Ordering = Ordering;
        return this;
    }
}

export default Mshopproduct;
