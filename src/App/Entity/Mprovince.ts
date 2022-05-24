import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
/**
 * @class Mprovince
 */
class Mprovince extends BaseEntity {
    protected Id: number | string | undefined;
    protected Mcities: EntityList|undefined;
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
     * @return {Mprovince}
     */
    setId(Id: number | string) {
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
    setMcities(Mcities: EntityList) {
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
     * @return {Mprovince}
     */
    setDescription(Description: string) {
        this.Description = Description;
        return this;
    }
}

export default Mprovince;
