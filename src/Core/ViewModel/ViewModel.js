import Model from '../Model/Model';

/**
 * @clas ViewModel
 */
class ViewModel {
    model = null;
    #_autoAddResource = false;

    /**
     *
     * @param {bool} autoAddResource
     * @param {Model} model
     */
    constructor(autoAddResource, model) {
        this.model = model;
        this.#_autoAddResource = autoAddResource;
    }

    /**
     * Add Resource
     * @param {BaseViewModel} viewModel
     */
    async addResource(viewModel) {

    }

    /**
     * Set auto add resource
     * @param {*} addResource
     */
    setAutoAddResource(addResource = true) {
        this.#_autoAddResource = addResource;
    }

    /**
     * Get auto add resouce
     * @return {boolean}
     */
    getAutoAddResource() {
        return this.#_autoAddResource;
    }

    /**
     *
     */
    async toJson() {

    }
}

export default ViewModel;
