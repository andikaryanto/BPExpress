import CollectionModel from '../../Core/Model/CollectionModel';
import Model from '../../Core/Model/Model';
import BaseViewModel from './BaseViewModel';

/**
 * @class BaseCollection
 */
class BaseCollection {
    private collection: CollectionModel | Array<any>;
    private element:{}[] = [];

    /**
     *
     * @param {CollectionModel|array} collection
     */
    constructor(collection: CollectionModel | Array<any>) {
        this.collection = collection;
    }

    /**
     *
     * @param {Model} model
     */
    shape(model: Model) {

    }

    /**
     * proceed shaping to view model
     */
    async proceed() {
        let arrayCollection = [];
        if (this.collection instanceof CollectionModel) {
            arrayCollection = this.collection.getItems();
        } else {
            arrayCollection = this.collection;
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
    async proceedAndGetData(): Promise<{}[]> {
        return (await this.proceed()).getElements();
    }

    /**
     * Add item element
     * @param {BaseViewModel} viewModel
     * @return {void}
     */
    async addItem(viewModel: BaseViewModel):Promise<void> {
        const item = await viewModel.toJson();
        this.element.push(item);
    }

    /**
     * Get elemet
     * @return {[]}
     */
    getElements(): {}[] {
        return this.element;
    }
}

export default BaseCollection;
