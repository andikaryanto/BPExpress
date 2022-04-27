import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
import Mcity from './Mcity.js';
/**
 * @class Mdistrict
 */
class Mdistrict extends BaseEntity {
    Id;
    Mcity;
    Mvillages;
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
     * @return {Mdistrict}
     */
    setId(Id) {
        this.Id = Id;

        return this;
    }

    /**
     *
     * @return {Mcity}
     */
    getMcity() {
        return this.Mcity;
    }

    /**
     *
     * @param {Mcity} Mcity
     * @return {Mdistrict}
     */
    setMcity(Mcity) {
        this.Mcity = Mcity;
        return this;
    }

    /**
     *
     * @return {EntityList}
     */
     getMvillages() {
        return this.Mvillages;
    }

    /**
     *
     * @param {EntityList} Mvillages
     * @return {Mdistrict}
     */
    setMvillages(Mvillages) {
        this.Mvillages = Mvillages;
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
     * @return {Mdistrict}
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
     * @return {Mdistrict}
     */
    setDescription(Description) {
        this.Description = Description;
        return this;
    }
}

export default Mdistrict;
