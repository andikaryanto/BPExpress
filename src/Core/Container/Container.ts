import {ContainerBuilder} from 'node-dependency-injection';

/**
 * @class Container
 */
class Container {
    private static instance: Container;
    containerBuilder!: ContainerBuilder;

    /**
     *
     */
    constructor() {

    }

    /**
     * Get instance
     * @return {Container}
     */
    static getInstance(): Container {
        if (this.instance == null) {
            this.instance = new this;
        }
        return this.instance;
    }

    /**
     * Set conatiner builder
     * @param {ContainerBuilder} containerBuilder
     * @return {Container}
     */
    setContainerBuilder(containerBuilder: ContainerBuilder): Container {
        this.containerBuilder = containerBuilder;
        return this;
    }

    /**
     * Get service instance
     * @param {string} key
     * @return {*}
     */
    get(key: string): any {
        return this.containerBuilder.get(key);
    }
}

export default Container;
