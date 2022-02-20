import BaseEntity from './BaseEntity.js';
/**
 * @class Mdistrict
 */
class Mdistrict extends BaseEntity {
    Id;
    City;
    Name;
    Description;

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;

        return this;
    }

    getCity() {
        return this.City;
    }

    setCity(City) {
        this.City = City;
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

export default Mdistrict;
