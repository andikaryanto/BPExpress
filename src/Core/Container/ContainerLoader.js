import {ContainerBuilder} from 'node-dependency-injection';
import Container from '../../App/Config/Container';
import CoreContainer from './Container.js';

/**
 * @class ContainerLoader
 */
class ContainerLoader {
    /**
     *
     * @return {CoreContainer}
     */
    static load() {
        const containerBuilder = new ContainerBuilder();

        for (const service of Container.service) {
            service(containerBuilder);
        }

        return CoreContainer.getInstance().setContainerBuilder(containerBuilder);
    }
}

export default ContainerLoader;
