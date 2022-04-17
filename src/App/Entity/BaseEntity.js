import Entity from '../../Core/Entity/Entity';

/**
 * @class BaseEntity
 */
class BaseEntity extends Entity {
    Created;
    CreatedBy;
    Modified;
    ModifiedBy;

    /**
     * Get Id
     * @return {Date}
     */
    getCreated() {
        return this.Created;
    }

    /**
     * set Id
     * @param {Date} created
     * @return {this}
     */
    setCreated(created) {
        this.Created = created;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getCreatedBy() {
        return this.CreatedBy;
    }

    /**
     * Get createdBy
     * @param {boolean} createdBy
     * @return {string}
     */
    setCreatedBy(createdBy) {
        this.CreatedBy = createdBy;
        return this;
    }

    /**
     * Get Id
     * @return {Date}
     */
    getModified() {
        return this.Modified;
    }

    /**
     * set Id
     * @param {Date} modified
     * @return {this}
     */
    setModified(modified) {
        this.Modified = modified;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getModifiedBy() {
        return this.ModifiedBy;
    }

    /**
     * set Id
     * @param {boolean} modifiedBy
     * @return {this}
     */
    setModifiedBy(modifiedBy) {
        this.ModifiedBy = modifiedBy;
        return this;
    }
}

export default BaseEntity;
