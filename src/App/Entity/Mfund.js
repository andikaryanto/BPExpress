import BaseEntity from './BaseEntity';

class Mfund extends BaseEntity {
    Id;
    Name;
    Description;
    Value;

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

    getValue() {
        return this.Value;
    }

    setValue(Value) {
        this.Value = Value;
        return this;
    }
}

export default Mfund;
