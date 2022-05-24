import BaseEntity from './BaseEntity';
import Mfund from './Mfund';
import Mvillage from './Mvillage';
import Mcanvasser from './Mcanvasser';
import EntityList from '../../Core/Entity/EntityList';
/**
 * @class Mgroupuser
 */
class Mshop extends BaseEntity {
    protected Id: number | string | undefined;
    protected Mcanvasser: Mcanvasser|undefined;
    protected Mvillage: Mvillage|undefined;
    protected Mshopproducts: EntityList|undefined;
    protected Name: string|undefined;
    protected Owner: string|undefined;
    protected Phone: string|undefined;
    protected PIN: string|undefined;
    protected MapAddress: string|undefined;
    protected Address: string|undefined;
    protected FrontShopPicture: string|undefined;
    protected IdentityCardPicture: string|undefined;
    protected OwnerPicture: string|undefined;
    protected CanvasserPicture: string|undefined;
    protected AccountNumber: string|undefined;
    protected AccountNumberPicture: string|undefined;
    protected Latitude: string|undefined;
    protected Longitude: string|undefined;
    protected Mfund: Mfund|undefined;
    protected Status: string|undefined;
    protected HasDelivery: boolean|undefined;
    protected IsOpen: boolean|undefined;

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
    setId(Id: number | string) {
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
    setMcanvasser(Mcanvasser: Mcanvasser) {
        this.Mcanvasser = Mcanvasser;
        return this;
    }

    /**
     *
     * @param {Mvillage} Mvillage
     * @return {Mshop}
     */
    setMvillage(Mvillage: Mvillage) {
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
    setMshopproducts(Mshopproducts: EntityList) {
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
    setName(Name: string) {
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
    setOwner(Owner: string) {
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
    setPhone(Phone: string) {
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
    setPIN(PIN: string) {
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
    setMapAddress(MapAddress: string) {
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
    setAddress(Address: string) {
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
    setFrontShopPicture(FrontShopPicture: string) {
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
    setIdentityCardPicture(IdentityCardPicture: string) {
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
    setOwnerPicture(OwnerPicture: string) {
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
    setCanvasserPicture(CanvasserPicture: string) {
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
    setAccountNumber(AccountNumber: string) {
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
    setAccountNumberPicture(AccountNumberPicture: string) {
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
    setLatitude(Latitude: string) {
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
    setLongitude(Longitude: string) {
        this.Longitude = Longitude;
        return this;
    }

    /**
     *
     * @return {Mfund}
     */
    getFund() {
        return this.Mfund;
    }

    /**
     *
     * @param {Mfund} Mfund
     * @return {Mshop}
     */
    setFund(Mfund: Mfund) {
        this.Mfund = Fund;
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
    setStatus(Status:string) {
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
    setHasDelivery(HasDelivery: boolean) {
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
    setIsOpen(IsOpen: boolean) {
        this.IsOpen = IsOpen;
        return this;
    }
}


export default Mshop;
