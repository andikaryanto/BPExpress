import Entity from '../Entity/Entity';

/**
 * @clas ViewModel
 */
class ViewModel {
    entity: Entity|null = null;
    #_autoAddResource = false;

    /**
     *
     * @param {boolean} autoAddResource
     * @param {Entity} entity
     */
    constructor(autoAddResource: boolean, entity: Entity) {
        this.entity = entity;
        this.#_autoAddResource = autoAddResource;
    }

    /**
     * Add Resource
     * @param {ViewModel} viewModel
     */
    async addResource(viewModel: ViewModel) {

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
