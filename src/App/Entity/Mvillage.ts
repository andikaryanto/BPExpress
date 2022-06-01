import EntityList from '../../Core/Entity/EntityList';
import BaseEntity from './BaseEntity';
import Mcanvasser from './Mcanvasser';
import Mdistrict from './Mdistrict';
import Mshop from './Mshop';
/**
 * @class Mvillage
 */
class Mvillage extends BaseEntity {
    protected Id: number|string|undefined;
    protected Mcanvassers: EntityList<Mcanvasser>|undefined;
    protected Mdistrict: Mdistrict|undefined;
    protected Mshops: EntityList<Mshop>|undefined;
    protected Name: string|undefined;
    protected Description: string|undefined;

    /**
     *
     * @return {number|string}
     */
    getId() {
        return this.Id;
    }

    /**
     *
     * @param {number|string} Id
     * @return {Mvillage}
     */
    setId(Id:number|string) {
        this.Id = Id;

        return this;
    }

    /**
     *
     * @return {EntityList<Mcanvasser>}
     */
    getMcanvassers() {
        return this.Mcanvassers;
    }

    /**
     *
     * @param {EntityList<Mcanvasser>} Mcanvassers
     * @return {Mvillage}
     */
    setMcanvassers(Mcanvassers: EntityList<Mcanvasser>) {
        this.Mcanvassers = Mcanvassers;
        return this;
    }

    /**
     *
     * @return {Mdistrict}
     */
    getMdistrict() {
        return this.Mdistrict;
    }

    /**
     *
     * @param {Mdistrict} Mdistrict
     * @return {Mvillage}
     */
    setMdistrict(Mdistrict: Mdistrict) {
        this.Mdistrict = Mdistrict;
        return this;
    }


    /**
     *
     * @return {EntityList<Mshop>}
     */
    getMshops() {
        return this.Mshops;
    }

    /**
     *
     * @param {EntityList<Mshop>} Mshops
     * @return {Mvillage}
     */
    setMshops(Mshops: EntityList<Mshop>) {
        this.Mshops = Mshops;
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
     * @return {Mvillage}
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
     * @return {Mvillage}
     */
    setDescription(Description: string) {
        this.Description = Description;
        return this;
    }
}

export default Mvillage;
