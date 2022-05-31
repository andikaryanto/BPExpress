import EntityList from '../../Core/Entity/EntityList';
import BaseEntity from './BaseEntity';
import Mproduct from './Mproduct';

/**
 * @class Mproductcategory
 */
class Mproductcategory extends BaseEntity {
    protected Id: number | string | undefined;
    protected Mproducts: EntityList<Mproduct>|undefined;
    protected Name: string|undefined;
    protected Picture: string|undefined;
    protected Description: string|undefined;

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
    setId(Id: number | string) {
        this.Id = Id;
        return this;
    }

    /**
     *
     * @return {EntityList<Mproduct>}
     */
    getMproducts() {
        return this.Mproducts;
    }

    /**
     *
     * @param {EntityList<Mproduct>} Mproducts
     * @return {Mproductcategory}
     */
    setMproducts(Mproducts: EntityList<Mproduct>) {
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
    setName(Name: string) {
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
    setPicture(Picture:string) {
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
    setDescription(Description: string) {
        this.Description = Description;
        return this;
    }
}

export default Mproductcategory;
