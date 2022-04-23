import Controller from '../../Services/Controller';
import Cron from '../../Services/Cron';
import Entity from '../../Services/Entity';
import Middleware from '../../Services/Middleware';
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
            Cron,
            Repository,
            Service,
            Controller,
            Middleware,
            Entity,
        ];
    }
}

export default Container;
