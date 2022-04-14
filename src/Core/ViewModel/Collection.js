import Entity from '../Entity/Entity';
import LibCollection from '../Libraries/Collection';
import BaseViewModel from './ViewModel';

/**
 * @class Collection
 */
class Collection {
    #_collection = null;
    #_element = [];

    /**
     *
     * @param {LibCollection|array} collection
     */
    constructor(collection) {
        this.#_collection = collection;
    }

    /**
     *
     * @param {Entity} model
     */
    async shape(model) {

    }

    /**
     *
     * @return {number|null}
     */
    getPage() {
        if (this.#_collection instanceof LibCollection) {
            return this.#_collection.getPage();
        }
        return null;
    }

    /**
     *
     * @return {number|null}
     */
    getSize() {
        if (this.#_collection instanceof LibCollection) {
            return this.#_collection.getSize();
        }
        return null;
    }

    /**
     *
     * @return {number|null}
     */
    getTotal() {
        if (this.#_collection instanceof LibCollection) {
            return this.#_collection.getTotal();
        }
        return null;
    }

    /**
     * proceed shaping to view model
     * @return {this}
     */
    async proceed() {
        let arrayCollection = [];
        if (this.#_collection instanceof LibCollection) {
            arrayCollection = await this.#_collection.getItems();
        } else {
            arrayCollection = this.#_collection;
        }

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
    async addItem(viewModel) {
        const item = await viewModel.toJson();
        this.#_element.push(item);
    }

    /**
     * Get elemet
     * @return {[]}
     */
    getElements() {
        return this.#_element;
    }
}

export default Collection;
