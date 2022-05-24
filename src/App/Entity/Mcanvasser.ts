import BaseEntity from './BaseEntity';
import Muser from './Muser';
import Mvillage from './Mvillage';
/**
 * @class Mcanvasser
 */
class Mcanvasser extends BaseEntity {

    protected Id: number|string|undefined;
    protected Muser: Muser|undefined;
    protected Mvillage: Mvillage|undefined;
    protected Name: string|undefined;
    protected Email: string|undefined;
    protected Phone: string|undefined;
    protected Supervisor: string|undefined;
    protected Address: string|undefined;

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
     * @return {Mcanvasser}
     */
    setId(Id: number|string) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Muser}
     */
    getUser() {
        return this.Muser;
    }

    /**
     *
     * @param {Muser} User
     * @return {Mcanvasser}
     */
    setUser(Muser: Muser) {
        this.Muser = Muser;
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
     * @param {MMvillage} Mvillage
     * @return {Mcanvasser}
     */
    setMvillage(Mvillage: Mvillage) {
        this.Mvillage = Mvillage;
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
     * @return {Mcanvasser}
     */
    setName(Name: string) {
        this.Name = Name;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getEmail() {
        return this.Email;
    }

    /**
     *
     * @param {string} Email
     * @return {Mcanvasser}
     */
    setEmail(Email: string) {
        this.Email = Email;
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
     * @return {Mcanvasser}
     */
    setPhone(Phone: string) {
        this.Phone = Phone;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getSupervisor() {
        return this.Supervisor;
    }

    /**
     *
     * @param {string} Supervisor
     * @return {Mcanvasser}
     */
    setSupervisor(Supervisor: string) {
        this.Supervisor = Supervisor;
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
     * @return {Mcanvasser}
     */
    setAddress(Address: string) {
        this.Address = Address;
        return this;
    }
}

export default Mcanvasser;
