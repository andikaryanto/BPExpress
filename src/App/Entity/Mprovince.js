import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
/**
 * @class Mprovince
 */
class Mprovince extends BaseEntity {
    Id;
    Mcities;
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
     * @return {Mprovince}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {EntityList}
     */
    getMcities() {
        return this.Mcities;
    }

    /**
     *
     * @param {EntityList} Mcities
     * @return {Mprovince}
     */
    setMcities(Mcities) {
        this.Mcities = Mcities;
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
     * @return {Mprovince}
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
     * @return {Mprovince}
     */
    setDescription(Description) {
        this.Description = Description;
        return this;
    }
}

export default Mprovince;
