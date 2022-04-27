import BaseEntity from './BaseEntity.js';
import Mfund from './Mfund.js';
import Mvillage from './Mvillage.js';
import Mcanvasser from './Mcanvasser';
import EntityList from '../../Core/Entity/EntityList.js';
/**
 * @class Mgroupuser
 */
class Mshop extends BaseEntity {
    Id;
    Mcanvasser;
    Mvillage;
    Mshopproducts;
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
     * @return {Mshop}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Mcanvasser}
     */
    getMcanvasser() {
        return this.Mcanvasser;
    }

    /**
     *
     * @param {Mcanvasser} Mcanvasser
     * @return {Mshop}
     */
    setMcanvasser(Mcanvasser) {
        this.Mcanvasser = Mcanvasser;
        return this;
    }

    /**
     *
     * @param {Mvillage} Mvillage
     * @return {Mshop}
     */
    setMvillage(Mvillage) {
        this.Mvillage = Mvillage;
        return this;
    }

    /**
     *
     * @return {Mvillage}
     */
    getMvillage() {
        return this.Mvillage;
    }

    /**
     *
     * @param {EntityList} Mshopproducts
     * @return {Mshop}
     */
    setMshopproducts(Mshopproducts) {
        this.Mshopproducts = Mshopproducts;
        return this;
    }

    /**
     *
     * @return {EntityList}
     */
     getMshopproducts() {
        return this.Mshopproducts;
    }

    /**
     *
     * @return {Mcanvasser}
     */
     getMcanvasser() {
        return this.Mcanvasser;
    }

    /**
     *
     * @param {Mcanvasser} Mcanvasser
     * @return {Mshop}
     */
    setMcanvasser(Mcanvasser) {
        this.Mcanvasser = Mcanvasser;
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
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
     * @return {Mshop}
     */
    setIsOpen(IsOpen) {
        this.IsOpen = IsOpen;
        return this;
    }
}


export default Mshop;
