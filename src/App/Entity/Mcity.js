import BaseEntity from './BaseEntity.js';
/**
 * @class Mcity
 */
class Mcity extends BaseEntity {
    Id;
    Province;
    Name;
    Description;

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;

        return this;
    }

    getProvince() {
        return this.Province;
    }

    setProvince(Province) {
        this.Province = Province;
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

export default Mcity;
