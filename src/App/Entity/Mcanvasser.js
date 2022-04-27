import BaseEntity from './BaseEntity.js';
import Muser from './Muser.js';
import Mvillage from './Mvillage.js';
/**
 * @class Mcanvasser
 */
class Mcanvasser extends BaseEntity {
    Id;
    User;
    Mvillage;
    Name;
    Email;
    Phone;
    Supervisor;
    Address;

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
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Muser}
     */
    getUser() {
        return this.User;
    }

    /**
     *
     * @param {Muser} User
     * @return {Mcanvasser}
     */
    setUser(User) {
        this.User = User;
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
    setMvillage(Mvillage) {
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
    setName(Name) {
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
    setEmail(Email) {
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
    setPhone(Phone) {
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
    setSupervisor(Supervisor) {
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
    setAddress(Address) {
        this.Address = Address;
        return this;
    }
}

export default Mcanvasser;
