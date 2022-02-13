import {ContainerBuilder} from 'node-dependency-injection';

/**
 * @class Container
 */
class Container {
    static #_instance;
    containerBuilder = null;

    /**
     *
     */
    constructor() {

    }

    /**
     * Get instance
     * @return {Container}
     */
    static getInstance() {
        if (this.#_instance == null) {
            this.#_instance = new this;
        }
        return this.#_instance;
    }

    /**
     * Set conatiner builder
     * @param {ContainerBuilder} containerBuilder
     * @return {Container}
     */
    setContainerBuilder(containerBuilder) {
        this.containerBuilder = containerBuilder;
        return this;
    }

    /**
     * Get service instance
     * @param {string} key
     * @return {*}
     */
    get(key) {
        return this.containerBuilder.get(key);
    }
}

export default Container;
