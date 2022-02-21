import Entity from '../../Core/Entity/Entity';
import Mproductcategory from './Mproductcategory';
/**
 * @class Mproduct
 */
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

    /**
     *
     * @return {number | string}}
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
     * @return {Mproductcategory}
     */
    getProductcategory() {
        return this.Productcategory;
    }

    /**
     *
     * @param {Mproductcategory} Productcategory
     * @return {this}
     */
    setProductcategory(Productcategory) {
        this.Productcategory = Productcategory;
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
    getPrice() {
        return this.Price;
    }

    /**
     *
     * @param {float} Price
     * @return {this}
     */
    setPrice(Price) {
        this.Price = Price;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getProducer() {
        return this.Producer;
    }

    /**
     *
     * @param {string} Producer
     * @return {this}
     */
    setProducer(Producer) {
        this.Producer = Producer;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getPackSize() {
        return this.PackSize;
    }

    /**
     *
     * @param {string} PackSize
     * @return {this}
     */
    setPackSize(PackSize) {
        this.PackSize = PackSize;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getQuality() {
        return this.Quality;
    }

    /**
     *
     * @param {string} Quality
     * @return {this}
     */
    setQuality(Quality) {
        this.Quality = Quality;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getPicture() {
        return this.Picture;
    }

    /**
     *
     * @param {string} Picture
     * @return {this}
     */
    setPicture(Picture) {
        this.Picture = Picture;
        return this;
    }
}

export default Mproduct;
