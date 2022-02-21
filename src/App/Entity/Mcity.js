import BaseEntity from './BaseEntity.js';
import Mprovince from './Mprovince.js';
/**
 * @class Mcity
 */
class Mcity extends BaseEntity {
    Id;
    Province;
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
     * @return {Mprovince}
     */
    getProvince() {
        return this.Province;
    }

    /**
     *
     * @param {Mprovince} Province
     * @return {this}
     */
    setProvince(Province) {
        this.Province = Province;
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

export default Mcity;
