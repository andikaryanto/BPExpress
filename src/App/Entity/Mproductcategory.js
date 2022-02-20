import BaseEntity from "./BaseEntity";

class Mproductcategory extends BaseEntity{
    Id;
    Name;
    Picture;
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

    getPicture() {
        return this.Picture;
    }

    setPicture(Picture) {
        this.Picture = Picture;
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

export default Mproductcategory;