import Model from '../../Core/Model/Model';

/**
 * @clas BaseviewModel
 */
class BaseViewModel {
    model: any;
    private autoAddResource: boolean = false;

    /**
     *
     * @param {boolean} autoAddResource
     * @param {Model} model
     */
    constructor(autoAddResource: boolean, model: Model) {
        this.model = model;
        this.autoAddResource = autoAddResource;
    }

    /**
     * Add Resource
     * @param {BaseViewModel} viewModel
     */
    addResource(viewModel: BaseViewModel) {

    }

    /**
     * Set auto add resource
     * @param {*} addResource
     */
    setAutoAddResource(addResource: any = true) {
        this.autoAddResource = addResource;
    }

    /**
     * Get auto add resouce
     * @return {boolean}
     */
    getAutoAddResource(): boolean {
        return this.autoAddResource;
    }

    /**
     * @returns {Promise<{}>}
     */
    async toJson(): Promise<{}> {
        return {};
    }
}

export default BaseViewModel;
