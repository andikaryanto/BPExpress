import BaseEntity from './BaseEntity';

/**
 * @class Mproductcategory
 */
class Mproductcategory extends BaseEntity {
    Id;
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
     * @return {this}
     */
    setId(Id) {
        this.Id = Id;
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
}

export default Mproductcategory;
