import CollectionModel from '../../Core/Model/CollectionModel';
import Model from '../../Core/Model/Model';
import BaseViewModel from './BaseViewModel';

/**
 * @class BaseCollection
 */
class BaseCollection {
    #_collection = null;
    #_element = [];

    /**
     *
     * @param {CollectionModel|array} collection
     */
    constructor(collection) {
        this.#_collection = collection;
    }

    /**
     *
     * @param {Model} model
     */
    shape(model) {

    }

    /**
     * proceed shaping to view model
     */
    async proceed() {
        let arrayCollection = [];
        if (this.#_collection instanceof CollectionModel) {
            arrayCollection = this.#_collection.getItems();
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
     * @return {Promise<[]>}
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

export default BaseCollection;
