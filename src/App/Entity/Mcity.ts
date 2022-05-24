import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
import Mdistrict from './Mdistrict.js';
import Mprovince from './Mprovince.js';
/**
 * @class Mcity
 */
class Mcity extends BaseEntity {
    protected Id: number|string|undefined;
    protected Mprovince: Mprovince|undefined;
    protected Mdistricts: EntityList|undefined;
    protected Name: string|undefined;
    protected Description: string|undefined;

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
    setId(Id: number | string) {
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
    setMprovince(Mprovince: Mprovince) {
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
    setMdistricts(Mdistricts: EntityList) {
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
    setName(Name: string) {
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
    setDescription(Description: string) {
        this.Description = Description;
        return this;
    }
}

export default Mcity;