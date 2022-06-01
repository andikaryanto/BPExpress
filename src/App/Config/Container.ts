import Command from '../../Services/Command';
import Controller from '../../Services/Controller';
import Cron from '../../Services/Cron';
import Entity from '../../Services/Entity';
import Graphql from '../../Services/Graphql';
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
    static get service(): any[] {
        return [
            Command,
            Cron,
            Repository,
            Service,
            Controller,
            Middleware,
            Entity,
            Graphql,
        ];
    }
}

export default Container;
