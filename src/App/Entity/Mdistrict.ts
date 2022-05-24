import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
import Mcity from './Mcity.js';
/**
 * @class Mdistrict
 */
class Mdistrict extends BaseEntity {
    protected Id: number|string|undefined;
    protected Mcity: Mcity|undefined;
    protected Mvillages: EntityList|undefined;
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
     * @return {Mdistrict}
     */
    setId(Id: number | string) {
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
    setMcity(Mcity: Mcity) {
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
    setMvillages(Mvillages: EntityList) {
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
     * @return {Mdistrict}
     */
    setDescription(Description: string) {
        this.Description = Description;
        return this;
    }
}

export default Mdistrict;
