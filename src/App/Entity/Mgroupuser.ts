import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
/**
 * @class Mgroupuser
 */
class Mgroupuser extends BaseEntity {
    protected Id: number | string | undefined;
    protected Musers: EntityList|undefined;
    protected GroupName: string|undefined;
    protected Description: string|undefined;

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     * Get Id
     * @return {number | string}
     */
    getId() {
        return this.Id;
    }

    /**
     * set Id
     * @param {number | string} id
     * @return {Mgroupuser}
     */
    setId(id: number | string) {
        this.Id = id;
        return this;
    }

    /**
     * Get List of Muser
     * @return {EntityList}
     */
    getMusers() {
        return this.Musers;
    }

    /**
     * set list of Musers
     * @param {EntityList} Musers
     * @return {Mgroupuser}
     */
    setMusers(Musers: EntityList) {
        this.Musers = Musers;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getGroupName() {
        return this.GroupName;
    }

    /**
     * set Id
     * @param {string} GroupName
     * @return {Mgroupuser}
     */
    setGroupName(GroupName: string) {
        this.GroupName = GroupName;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getDescription() {
        return this.Description;
    }

    /**
     * set Id
     * @param {string} Description
     * @return {Mgroupuser}
     */
    setDescription(Description: string) {
        this.Description = Description;
        return this;
    }
}


export default Mgroupuser;
