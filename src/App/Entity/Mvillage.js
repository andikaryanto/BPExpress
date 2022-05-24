import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
import Mdistrict from './Mdistrict.js';
/**
 * @class Mvillage
 */
class Mvillage extends BaseEntity {
    Id;
    Mcanvassers;
    Mdistrict;
    Mshops;
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
     * @return {Mvillage}
     */
    setId(Id) {
        this.Id = Id;

        return this;
    }

    /**
     *
     * @return {EntityList}
     */
    getMcanvassers() {
        return this.Mcanvassers;
    }

    /**
     *
     * @param {EntityList} Mcanvassers
     * @return {Mvillage}
     */
    setMcanvassers(Mcanvassers) {
        this.Mcanvassers = Mcanvassers;
        return this;
    }

    /**
     *
     * @return {Mdistrict}
     */
    getMdistrict() {
        return this.Mdistrict;
    }

    /**
     *
     * @param {Mdistrict} Mdistrict
     * @return {Mvillage}
     */
    setMdistrict(Mdistrict) {
        this.Mdistrict = Mdistrict;
        return this;
    }


    /**
     *
     * @return {EntityList}
     */
    getMshops() {
        return this.Mshops;
    }

    /**
     *
     * @param {EntityList} Mshops
     * @return {Mvillage}
     */
    setMshops(Mshops) {
        this.Mshops = Mshops;
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
     * @return {Mvillage}
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
     * @return {Mvillage}
     */
    setDescription(Description) {
        this.Description = Description;
        return this;
    }
}

export default Mvillage;
