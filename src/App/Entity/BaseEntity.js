import Entity from "../../Core/Entity/Entity";

class BaseEntity extends Entity {

    Created;
    CreatedBy;
    Modified;
    ModifiedBy;

    /**
     * Get Id
     * @returns {string} 
     */
    getCreated() {
        return this.Created;
    }

    /**
     * set Id
     * @param {boolean} id
     * @returns {this} 
     */
    setCreated(created) {
        this.Created = created;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getCreatedBy() {
        return this.CreatedBy;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    setCreatedBy(createdBy) {
        this.CreatedBy = createdBy;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getModified() {
        return this.Modified;
    }

    /**
     * set Id
     * @param {boolean} id
     * @returns {this} 
     */
    setModified(modified) {
        this.Modified = modified;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getModifiedBy() {
        return this.ModifiedBy;
    }

    /**
     * set Id
     * @param {boolean} id
     * @returns {this} 
     */
     setModifiedBy(modifiedBy) {
        this.ModifiedBy = modifiedBy;
        return this;
    }

}

export default BaseEntity;