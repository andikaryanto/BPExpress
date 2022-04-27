import Entity from '../../Core/Entity/Entity';
import Mproductcategory from './Mproductcategory';
/**
 * @class Mproduct
 */
class Mproduct extends Entity {
    Id;
    Mproductcategory;
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
     * @return {Mproduct}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {Mproductcategory}
     */
    getMproductcategory() {
        return this.Mproductcategory;
    }

    /**
     *
     * @param {Mproductcategory} Mproductcategory
     * @return {Mproduct}
     */
    setMproductcategory(Mproductcategory) {
        this.Mproductcategory = Mproductcategory;
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
     * @return {Mproduct}
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
     * @return {Mproduct}
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
     * @return {Mproduct}
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
     * @return {Mproduct}
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
     * @return {Mproduct}
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
     * @return {Mproduct}
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
     * @return {Mproduct}
     */
    setPicture(Picture) {
        this.Picture = Picture;
        return this;
    }
}

export default Mproduct;
