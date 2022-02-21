import BaseEntity from './BaseEntity';

/**
 * @class Mfund
 */
class Mfund extends BaseEntity {
    Id;
    Name;
    Description;
    Value;

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
     * @return {this}
     */
    setId(Id) {
        this.Id = Id;
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
     * @return {this}
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
     * @return {this}
     */
    setDescription(Description) {
        this.Description = Description;
        return this;
    }

    /**
     *
     * @return {float}
     */
    getValue() {
        return this.Value;
    }

    /**
     *
     * @param {float} Value
     * @return {this}
     */
    setValue(Value) {
        this.Value = Value;
        return this;
    }
}

export default Mfund;
