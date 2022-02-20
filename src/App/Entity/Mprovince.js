import BaseEntity from './BaseEntity.js';
/**
 * @class Mprovince
 */
class Mprovince extends BaseEntity {
    Id;
    Name;
    Description;

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;
        return this;
    }

    getName() {
        return this.Name;
    }

    setName(Name) {
        this.Name = Name;
        return this;
    }

    getDescription() {
        return this.Description;
    }

    setDescription(Description) {
        this.Description = Description;
        return this;
    }
}

export default Mprovince;
