import Entity from '../Entity/Entity';

/**
 * @clas ViewModel
 */
abstract class ViewModel {
    entity: any;
    protected autoAddResource = false;

    /**
     *
     * @param {boolean} autoAddResource
     * @param {Entity} entity
     */
    constructor(autoAddResource: boolean, entity: any) {
        this.entity = entity;
        this.autoAddResource = autoAddResource;
    }

    /**
     * Add Resource
     * @param {ViewModel} viewModel
     */
     abstract addResource(viewModel: ViewModel): Promise<void>;

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
