import BaseEntity from './BaseEntity';

/**
 * @class Mfund
 */
class Mfund extends BaseEntity {
    protected Id: number | string | undefined;
    protected Name: string|undefined;
    protected Description: string|undefined;
    protected Value: number|undefined;

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
    setId(Id: number | string) {
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
     * @return {Mfund}
     */
    setDescription(Description: string) {
        this.Description = Description;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getValue() {
        return this.Value;
    }

    /**
     *
     * @param {number} Value
     * @return {Mfund}
     */
    setValue(Value: number) {
        this.Value = Value;
        return this;
    }
}

export default Mfund;
