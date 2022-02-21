import Controller from '../../Services/Controller';
import Entity from '../../Services/Entity';
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
            Entity,
        ];
    }
}

export default Container;
