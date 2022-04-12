import Collection from '../../Core/Libraries/Collection';
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
     * @param {Collection|array} collection
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
     * @return {this}
     */
    proceed() {
        let arrayCollection = [];
        if (this.#_collection instanceof Collection) {
            arrayCollection = this.#_collection.getItems();
        } else {
            arrayCollection = this.#_collection;
        }

        for (const item of arrayCollection) {
            this.shape(item);
        }

        return this;
    }

    /**
     * Process all data and return it
     * @return {[]}
     */
    proceedAndGetData() {
        return (this.proceed()).getElements();
    }

    /**
     * Add item element
     * @param {BaseViewModel} viewModel
     * @return {void}
     */
    addItem(viewModel) {
        const item = viewModel.toJson();
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