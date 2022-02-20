import BaseEntity from './BaseEntity.js';
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

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;
        return this;
    }

    getUser() {
        return this.User;
    }

    setUser(User) {
        this.User = User;
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

    getEmail() {
        return this.Email;
    }

    setEmail(Email) {
        this.Email = Email;
        return this;
    }

    getPhone() {
        return this.Phone;
    }

    setPhone(Phone) {
        this.Phone = Phone;
        return this;
    }

    getSupervisor() {
        return this.Supervisor;
    }

    setSupervisor(Supervisor) {
        this.Supervisor = Supervisor;
        return this;
    }

    getAddress() {
        return this.Address;
    }

    setAddress(Address) {
        this.Address = Address;
        return this;
    }

}

export default Mcanvasser;