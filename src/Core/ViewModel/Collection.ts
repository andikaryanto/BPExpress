import Entity from '../Entity/Entity';
import UtilCollection from '../Utilities/Collection';
import BaseViewModel from './ViewModel';

/**
 * @class Collection
 */
class Collection {
    protected collection: UtilCollection|Array<any>;
    protected element: any[] = [];

    /**
     *
     * @param {UtilCollection|Array<any>} collection
     */
    constructor(collection: UtilCollection|Array<any>) {
        this.collection = collection;
    }

    /**
     *
     * @param {Entity} model
     */
    async shape(model: Entity) {

    }

    /**
     *
     * @return {number|null}
     */
    getPage() {
        if (this.collection instanceof UtilCollection) {
            return this.collection.getPage();
        }
        return null;
    }

    /**
     *
     * @return {number|null}
     */
    getSize() {
        if (this.collection instanceof UtilCollection) {
            return this.collection.getSize();
        }
        return null;
    }

    /**
     *
     * @return {number|null}
     */
    getTotal() {
        if (this.collection instanceof UtilCollection) {
            return this.collection.getTotal();
        }
        return null;
    }

    /**
     * proceed shaping to view model
     * @return {this}
     */
    async proceed() {
        let arrayCollection: UtilCollection|any[];
        arrayCollection = this.collection;
    
        for (const item of arrayCollection) {
            await this.shape(item);
        }

        return this;
    }

    /**
     * Process all data and return it
     * @return {[]}
     */
    async proceedAndGetData() {
        return (await this.proceed()).getElements();
    }

    /**
     * Add item element
     * @param {BaseViewModel} viewModel
     * @return {void}
     */
    async addItem(viewModel: BaseViewModel) {
        const item = await viewModel.toJson();
        this.element.push(item);
    }

    /**
     * Get elemet
     * @return {[]}
     */
    getElements() {
        return this.element;
    }
}

export default Collection;
