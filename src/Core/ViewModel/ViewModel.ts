import Entity from '../Entity/Entity';

/**
 * @clas ViewModel
 */
abstract class ViewModel<T> {
    entity: T;
    protected autoAddResource = false;

    /**
     *
     * @param {boolean} autoAddResource
     * @param {T} entity
     */
    constructor(autoAddResource: boolean, entity: T) {
        this.entity = entity;
        this.autoAddResource = autoAddResource;
    }

    /**
     * Add Resource
     * @param {any} object
     */
     abstract addResource(object: any): Promise<void>;

    /**
     * Set auto add resource
     * @param {boolean} autoAddResource
     */
    setAutoAddResource(autoAddResource: boolean = true): void {
        this.autoAddResource = autoAddResource;
    }

    /**
     * Get auto add resouce
     * @return {boolean}
     */
    getAutoAddResource(): boolean {
        return this.autoAddResource;
    }

    /**
     * @return {Promise<any>}
     */
     abstract toJson(): Promise<any>;
}

export default ViewModel;
