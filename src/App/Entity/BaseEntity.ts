import Entity from '../../Core/Entity/Entity';

/**
 * @class BaseEntity
 */
class BaseEntity extends Entity {
    protected Created: Date|undefined;
    protected CreatedBy: string|undefined;
    protected Modified: Date|undefined;
    protected ModifiedBy: string|undefined;

    /**
     * Get Id
     * @return {Date}
     */
    getCreated() {
        return this.Created;
    }

    /**
     * set Id
     * @param {Date} Created
     * @return {this}
     */
    setCreated(Created: Date) {
        this.Created = Created;
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
     * @param {boolean} CreatedBy
     * @return {string}
     */
    setCreatedBy(CreatedBy: string) {
        this.CreatedBy = CreatedBy;
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
     * @param {Date} Modified
     * @return {this}
     */
    setModified(Modified: Date) {
        this.Modified = Modified;
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
     * @param {string} ModifiedBy
     * @return {this}
     */
    setModifiedBy(ModifiedBy: string) {
        this.ModifiedBy = ModifiedBy;
        return this;
    }
}

export default BaseEntity;
