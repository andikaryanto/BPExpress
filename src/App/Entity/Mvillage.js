import BaseEntity from './BaseEntity.js';
/**
 * @class Mvillage
 */
class Mvillage extends BaseEntity {
    Id;
    District;
    Name;
    Description;

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;

        return this;
    }

    getDistrict() {
        return this.District;
    }

    setDistrict(District) {
        this.District = District;
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

export default Mvillage;
