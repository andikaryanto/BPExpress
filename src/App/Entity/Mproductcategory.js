import EntityList from '../../Core/Entity/EntityList';
import BaseEntity from './BaseEntity';

/**
 * @class Mproductcategory
 */
class Mproductcategory extends BaseEntity {
    Id;
    Mproducts;
    Name;
    Picture;
    Description;

    /**
     *
     * @return {number | string}
     */
    getId() {
        return this.Id;
    }

    /**
     *
     * @param {number | string} Id
     * @return {Mproductcategory}
     */
    setId(Id) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {EntityList}
     */
    getMproducts() {
        return this.Mproducts;
    }

    /**
     *
     * @param {EntityList} Mproducts
     * @return {Mproductcategory}
     */
    setMproducts(Mproducts) {
        this.Mproducts = Mproducts;
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
     * @return {Mproductcategory}
     */
    setName(Name) {
        this.Name = Name;
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
     * @return {Mproductcategory}
     */
    setPicture(Picture) {
        this.Picture = Picture;
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
     * @return {Mproductcategory}
     */
    setDescription(Description) {
        this.Description = Description;
        return this;
    }
}

export default Mproductcategory;
