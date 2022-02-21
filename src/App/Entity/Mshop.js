import BaseEntity from './BaseEntity.js';
import Mfund from './Mfund.js';
import Mvillage from './Mvillage.js';
import Mcanvasser from './Mcanvasser';
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
    Status;
    HasDelivery;
    IsOpen;

    /**
     *
     * @return {number | string}
     */
    getId() {
        return this.Id;
    }

    /**
     *
     * @param {number | string} Id
     * @return {this}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Mcanvasser}
     */
    getCanvasser() {
        return this.Canvasser;
    }

    /**
     *
     * @param {Mcanvasser} Canvasser
     * @return {this}
     */
    setCanvasser(Canvasser) {
        this.Canvasser = Canvasser;
        return this;
    }

    /**
     *
     * @return {Mvillage}
     */
    getVillage() {
        return this.Village;
    }

    /**
     *
     * @param {Mvillage} Village
     * @return {this}
     */
    setVillage(Village) {
        this.Village = Village;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getName() {
        return this.Name;
    }

    /**
     *
     * @param {string} Name
     * @return {this}
     */
    setName(Name) {
        this.Name = Name;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getOwner() {
        return this.Owner;
    }

    /**
     *
     * @param {string} Owner
     * @return {this}
     */
    setOwner(Owner) {
        this.Owner = Owner;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getPhone() {
        return this.Phone;
    }

    /**
     *
     * @param {string} Phone
     * @return {this}
     */
    setPhone(Phone) {
        this.Phone = Phone;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getPIN() {
        return this.PIN;
    }

    /**
     *
     * @param {string} PIN
     * @return {this}
     */
    setPIN(PIN) {
        this.PIN = PIN;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getMapAddress() {
        return this.MapAddress;
    }

    /**
     *
     * @param {string} MapAddress
     * @return {this}
     */
    setMapAddress(MapAddress) {
        this.MapAddress = MapAddress;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.Address;
    }

    /**
     *
     * @param {string} Address
     * @return {this}
     */
    setAddress(Address) {
        this.Address = Address;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getFrontShopPicture() {
        return this.FrontShopPicture;
    }

    /**
     *
     * @param {string} FrontShopPicture
     * @return {this}
     */
    setFrontShopPicture(FrontShopPicture) {
        this.FrontShopPicture = FrontShopPicture;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getIdentityCardPicture() {
        return this.IdentityCardPicture;
    }

    /**
     *
     * @param {string} IdentityCardPicture
     * @return {this}
     */
    setIdentityCardPicture(IdentityCardPicture) {
        this.IdentityCardPicture = IdentityCardPicture;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getOwnerPicture() {
        return this.OwnerPicture;
    }

    /**
     *
     * @param {string} OwnerPicture
     * @return {this}
     */
    setOwnerPicture(OwnerPicture) {
        this.OwnerPicture = OwnerPicture;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getCanvasserPicture() {
        return this.CanvasserPicture;
    }

    /**
     *
     * @param {string} CanvasserPicture
     * @return {this}
     */
    setCanvasserPicture(CanvasserPicture) {
        this.CanvasserPicture = CanvasserPicture;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getAccountNumber() {
        return this.AccountNumber;
    }

    /**
     *
     * @param {string} AccountNumber
     * @return {this}
     */
    setAccountNumber(AccountNumber) {
        this.AccountNumber = AccountNumber;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getAccountNumberPicture() {
        return this.AccountNumberPicture;
    }

    /**
     *
     * @param {string} AccountNumberPicture
     * @return {this}
     */
    setAccountNumberPicture(AccountNumberPicture) {
        this.AccountNumberPicture = AccountNumberPicture;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getLatitude() {
        return this.Latitude;
    }

    /**
     *
     * @param {string} Latitude
     * @return {this}
     */
    setLatitude(Latitude) {
        this.Latitude = Latitude;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getLongitude() {
        return this.Longitude;
    }

    /**
     *
     * @param {string} Longitude
     * @return {this}
     */
    setLongitude(Longitude) {
        this.Longitude = Longitude;
        return this;
    }

    /**
     *
     * @return {Mfund}
     */
    getFund() {
        return this.Fund;
    }

    /**
     *
     * @param {Mfund} Fund
     * @return {this}
     */
    setFund(Fund) {
        this.Fund = Fund;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getStatus() {
        return this.Status;
    }

    /**
     *
     * @param {string} Status
     * @return {this}
     */
    setStatus(Status) {
        this.Status = Status;
        return this;
    }

    /**
     *
     * @return {boolean}
     */
    getHasDelivery() {
        return this.HasDelivery;
    }

    /**
     *
     * @param {boolean} HasDelivery
     * @return {this}
     */
    setHasDelivery(HasDelivery) {
        this.HasDelivery = HasDelivery;
        return this;
    }

    /**
     *
     * @return {boolean}
     */
    getIsOpen() {
        return this.IsOpen;
    }

    /**
     *
     * @param {boolean} IsOpen
     * @return {this}
     */
    setIsOpen(IsOpen) {
        this.IsOpen = IsOpen;
        return this;
    }
}


export default Mshop;
