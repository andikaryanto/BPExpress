import BaseEntity from './BaseEntity.js';
/**
 * @class Mgroupuser
 */
class Mshop extends BaseEntity {
    Id;
    Canvasser;
    Village;
    Name;
    Owner;
    Phone;
    PIN;
    MapAddress;
    Address;
    FrontShopPicture;
    IdentityCardPicture;
    OwnerPicture;
    CanvasserPicture;
    AccountNumber;
    AccountNumberPicture;
    Latitude;
    Longitude;
    Fund;
    Status
    HasDelivery;
    IsOpen;

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;
        return this;
    }

    getCanvasser() {
        return this.Canvasser;
    }

    setCanvasser(Canvasser) {
        this.Canvasser = Canvasser;
        return this;
    }

    getVillage() {
        return this.Village;
    }

    setVillage(Village) {
        this.Village = Village;
        return this;
    }

    getName() {
        return this.Name;
    }

    setName(Name) {
        this.Name = Name;
        return this;
    }

    getOwner() {
        return this.Owner;
    }

    setOwner(Owner) {
        this.Owner = Owner;
        return this;
    }

    getPhone() {
        return this.Phone;
    }

    setPhone(Phone) {
        this.Phone = Phone;
        return this;
    }

    getPIN() {
        return this.PIN;
    }

    setPIN(PIN) {
        this.PIN = PIN;
        return this;
    }

    getMapAddress() {
        return this.MapAddress;
    }

    setMapAddress(MapAddress) {
        this.MapAddress = MapAddress;
        return this;
    }

    getAddress() {
        return this.Address;
    }

    setAddress(Address) {
        this.Address = Address;
        return this;
    }

    getFrontShopPicture() {
        return this.FrontShopPicture;
    }

    setFrontShopPicture(FrontShopPicture) {
        this.FrontShopPicture = FrontShopPicture;
        return this;
    }

    getIdentityCardPicture() {
        return this.IdentityCardPicture;
    }

    setIdentityCardPicture(IdentityCardPicture) {
        this.IdentityCardPicture = IdentityCardPicture;
        return this;
    }

    getOwnerPicture() {
        return this.OwnerPicture;
    }

    setOwnerPicture(OwnerPicture) {
        this.OwnerPicture = OwnerPicture;
        return this;
    }

    getCanvasserPicture() {
        return this.CanvasserPicture;
    }

    setCanvasserPicture(CanvasserPicture) {
        this.CanvasserPicture = CanvasserPicture;
        return this;
    }

    getAccountNumber() {
        return this.AccountNumber;
    }

    setAccountNumber(AccountNumber) {
        this.AccountNumber = AccountNumber;
        return this;
    }

    getAccountNumberPicture() {
        return this.AccountNumberPicture;
    }

    setAccountNumberPicture(AccountNumberPicture) {
        this.AccountNumberPicture = AccountNumberPicture;
        return this;
    }

    getLatitude() {
        return this.Latitude;
    }

    setLatitude(Latitude) {
        this.Latitude = Latitude;
        return this;
    }

    getLongitude() {
        return this.Longitude;
    }

    setLongitude(Longitude) {
        this.Longitude = Longitude;
        return this;
    }

    getFund() {
        return this.Fund;
    }

    setFund(Fund) {
        this.Fund = Fund;
        return this;
    }

    getStatus() {
        return this.Status;
    }

    setStatus(Status) {
        this.Status = Status;
        return this;
    }

    getHasDelivery() {
        return this.HasDelivery;
    }

    setHasDelivery(HasDelivery) {
        this.HasDelivery = HasDelivery;
        return this;
    }

    getIsOpen() {
        return this.IsOpen;
    }

    setIsOpen(IsOpen) {
        this.IsOpen = IsOpen;
        return this;
    }

}


export default Mshop;
