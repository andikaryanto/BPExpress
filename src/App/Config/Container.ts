import Controller from '../../Services/Controller';
import Repository from '../../Services/Repository';
import Service from '../../Services/Service';

/**
 * @class Container
 */
class Container {
    /**
     * Get all service container
     * @return {[]}
     */
    static get service() {
        return [
            Repository,
            Service,
            Controller,
        ];
    }
}

export default Container;
