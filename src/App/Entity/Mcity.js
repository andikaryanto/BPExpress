import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
import Mprovince from './Mprovince.js';
/**
 * @class Mcity
 */
class Mcity extends BaseEntity {
    Id;
    Mprovince;
    Mditricts;
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
     * @return {Mcity}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Mprovince}
     */
    getMprovince() {
        return this.Mprovince;
    }

    /**
     *
     * @param {Mprovince} Mprovince
     * @return {Mcity}
     */
    setMprovince(Mprovince) {
        this.Mprovince = Mprovince;
        return this;
    }

    /**
     *
     * @return {EntityList}
     */
    getMdistricts() {
        return this.Mdistricts;
    }

    /**
     *
     * @param {Mdistricts} Mdistricts
     * @return {Mcity}
     */
    setMdistricts(Mdistricts) {
        this.Mdistricts = Mdistricts;
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
     * @return {Mcity}
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
     * @return {Mcity}
     */
    setDescription(Description) {
        this.Description = Description;
        return this;
    }
}

export default Mcity;
