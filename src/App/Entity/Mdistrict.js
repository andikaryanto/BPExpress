import BaseEntity from './BaseEntity.js';
import Mcity from './Mcity.js';
/**
 * @class Mdistrict
 */
class Mdistrict extends BaseEntity {
    Id;
    City;
    Name;
    Description;

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
     * @return {Mcity}
     */
    getCity() {
        return this.City;
    }

    /**
     *
     * @param {Mcity} City
     * @return {this}
     */
    setCity(City) {
        this.City = City;
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
    getDescription() {
        return this.Description;
    }

    /**
     *
     * @param {string} Description
     * @return {this}
     */
    setDescription(Description) {
        this.Description = Description;
        return this;
    }
}

export default Mdistrict;
