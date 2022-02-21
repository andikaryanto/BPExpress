import BaseEntity from './BaseEntity.js';
import Mvillage from './Mvillage.js';
/**
 * @class Mcanvasser
 */
class Mcanvasser extends BaseEntity {
    Id;
    User;
    Village;
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
     * @return {this}
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
     * @return {this}
     */
    setUser(User) {
        this.User = User;
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
    getEmail() {
        return this.Email;
    }

    /**
     *
     * @param {string} Email
     * @return {this}
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
    getSupervisor() {
        return this.Supervisor;
    }

    /**
     *
     * @param {string} Supervisor
     * @return {this}
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
     * @return {this}
     */
    setAddress(Address) {
        this.Address = Address;
        return this;
    }
}

export default Mcanvasser;
