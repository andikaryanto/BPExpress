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
     * @return {Mfund}
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
     * @return {Mfund}
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
     * @return {Mfund}
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
     * @return {Mfund}
     */
    setValue(Value) {
        this.Value = Value;
        return this;
    }
}

export default Mfund;
