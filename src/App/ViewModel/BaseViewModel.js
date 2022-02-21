import Model from '../../Core/Model/Model';

/**
 * @clas BaseviewModel
 */
class BaseViewModel {
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
    addResource(viewModel) {

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
    toJson() {

    }
}

export default BaseViewModel;
