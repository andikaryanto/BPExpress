import BaseEntity from './BaseEntity.js';
/**
 * @class Mvillage
 */
class Mvillage extends BaseEntity {
    Id;
    District;
    Name;
    Description;

    /**
     *
     * @return {number}
     */
    getId() {
        return this.Id;
    }

    /**
     *
     * @param {number} Id
     * @return {this}
     */
    setId(Id) {
        this.Id = Id;

        return this;
    }

    /**
     *
     * @return {string}
     */
    getDistrict() {
        return this.District;
    }

    /**
     *
     * @param {string} District
     * @return {this}
     */
    setDistrict(District) {
        this.District = District;
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

export default Mvillage;
