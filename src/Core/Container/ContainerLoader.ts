import {ContainerBuilder} from 'node-dependency-injection';
import Container from '../../App/Config/Container';
import CoreContainer from './Container';

/**
 * @class ContainerLoader
 */
class ContainerLoader {
    /**
     *
     * @return {CoreContainer}
     */
    static load(): CoreContainer {
        const containerBuilder = new ContainerBuilder();

        for (const service of Container.service) {
            service(containerBuilder);
        }

        return CoreContainer.getInstance().setContainerBuilder(containerBuilder);
    }
}

export default ContainerLoader;
