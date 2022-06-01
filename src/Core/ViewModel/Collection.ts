import Entity from '../Entity/Entity';
import UtilCollection from '../Utilities/Collection';
import BaseViewModel from './ViewModel';

/**
 * @class Collection
 */
class Collection<T> {
    protected collection: UtilCollection<T>|Array<any>;
    protected element: any[] = [];

    /**
     *
     * @param {UtilCollection|Array<any>} collection
     */
    constructor(collection: UtilCollection<T>|Array<any>) {
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
    getPage(): number|null {
        if (this.collection instanceof UtilCollection) {
            return this.collection.getPage();
        }
        return null;
    }

    /**
     *
     * @return {number|null}
     */
    getSize(): number|null {
        if (this.collection instanceof UtilCollection) {
            return this.collection.getSize();
        }
        return null;
    }

    /**
     *
     * @return {number|null}
     */
    getTotal(): number|null {
        if (this.collection instanceof UtilCollection) {
            return this.collection.getTotal();
        }
        return null;
    }

    /**
     * proceed shaping to view model
     * @return {this}
     */
    async proceed(): Promise<Collection<T>> {
        const arrayCollection: UtilCollection<T>|any[] = this.collection;

        for (const item of arrayCollection) {
            await this.shape(item);
        }

        return this;
    }

    /**
     * Process all data and return it
     * @return {[]}
     */
    async proceedAndGetData(): Promise<any[]> {
        return (await this.proceed()).getElements();
    }

    /**
     * Add item element
     * @param {BaseViewModel<T>} viewModel
     * @return {void}
     */
    async addItem(viewModel: BaseViewModel<T>) {
        const item = await viewModel.toJson();
        this.element.push(item);
    }

    /**
     * Get elemet
     * @return {[]}
     */
    getElements(): any[] {
        return this.element;
    }
}

export default Collection;
