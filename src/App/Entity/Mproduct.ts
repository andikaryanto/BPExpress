import Entity from '../../Core/Entity/Entity';
import Mproductcategory from './Mproductcategory';
/**
 * @class Mproduct
 */
class Mproduct extends Entity {
    protected Id: number | string | undefined;
    protected Mproductcategory: Mproductcategory|undefined;
    protected Name: string|undefined;
    protected Description: string|undefined;
    protected Price: number|undefined;
    protected Producer: string|undefined;
    protected PackSize: string|undefined;
    protected Quality: string|undefined;
    protected Picture: string|undefined;

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
    setId(Id: number | string) {
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
    setMproductcategory(Mproductcategory: Mproductcategory) {
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
     * @return {Mproduct}
     */
    setDescription(Description: string) {
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
     * @param {number} Price
     * @return {Mproduct}
     */
    setPrice(Price: number) {
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
    setProducer(Producer: string) {
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
    setPackSize(PackSize: string) {
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
    setQuality(Quality: string) {
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
    setPicture(Picture: string) {
        this.Picture = Picture;
        return this;
    }
}

export default Mproduct;
