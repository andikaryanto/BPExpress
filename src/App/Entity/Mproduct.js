import Entity from '../../Core/Entity/Entity';

class Mproduct extends Entity {
    Id;
    Productcategory;
    Name;
    Description;
    Price;
    Producer;
    PackSize;
    Quality;
    Picture;

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;
        return this;
    }

    getProductcategory() {
        return this.Productcategory;
    }

    setProductcategory(Productcategory) {
        this.Productcategory = Productcategory;
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

    getPrice() {
        return this.Price;
    }

    setPrice(Price) {
        this.Price = Price;
        return this;
    }

    getProducer() {
        return this.Producer;
    }

    setProducer(Producer) {
        this.Producer = Producer;
        return this;
    }

    getPackSize() {
        return this.PackSize;
    }

    setPackSize(PackSize) {
        this.PackSize = PackSize;
        return this;
    }

    getQuality() {
        return this.Quality;
    }

    setQuality(Quality) {
        this.Quality = Quality;
        return this;
    }

    getPicture() {
        return this.Picture;
    }

    setPicture(Picture) {
        this.Picture = Picture;
        return this;
    }
}

export default Mproduct;
