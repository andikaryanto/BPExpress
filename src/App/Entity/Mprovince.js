import BaseEntity from './BaseEntity.js';
/**
 * @class Mprovince
 */
class Mprovince extends BaseEntity {
    Id;
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

export default Mprovince;
