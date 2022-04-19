import EntityList from '../../Core/Entity/EntityList.js';
import BaseEntity from './BaseEntity.js';
/**
 * @class Mgroupuser
 */
class Mgroupuser extends BaseEntity {
    Id;
    Musers;
    GroupName;
    Description;

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     * Get Id
     * @return {number}
     */
    getId() {
        return this.Id;
    }

    /**
     * set Id
     * @param {number} id
     * @return {this}
     */
    setId(id) {
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
     * @return {this}
     */
    setMusers(Musers) {
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
     * @param {number} groupname
     * @return {this}
     */
    setGroupName(groupname) {
        this.GroupName = groupname;
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
     * @param {number} description
     * @return {this}
     */
    setDescription(description) {
        this.Description = description;
        return this;
    }
}


export default Mgroupuser;
