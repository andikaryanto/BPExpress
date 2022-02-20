import BaseEntity from './BaseEntity.js';
/**
 * @class Mgroupuser
 */
class Mgroupuser extends BaseEntity {
    Id;
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
     * @returns {number} 
     */
     getId() {
        return this.Id;
    }

    /**
     * set Id
     * @param {number} id
     * @returns {this} 
     */
    setId(id) {
        this.Id = id;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
     getGroupName() {
        return this.GroupName;
    }

    /**
     * set Id
     * @param {number} id
     * @returns {this} 
     */
    setGroupName(groupname) {
        this.GroupName = groupname;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
     getDescription() {
        return this.Description;
    }

    /**
     * set Id
     * @param {number} id
     * @returns {this} 
     */
    setDescription(description) {
        this.Description = description;
        return this;
    }

}


export default Mgroupuser;
