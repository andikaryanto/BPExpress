import InstanceLoader from '../Express/InstanceLoader';

/**
 * @class GraphQLLoader
 */
class GraphQLLoader {
    /**
     * Load all available all queries
     * @param {Array<any>} queries
     * @return {[]}
     */
    static loadQuery(queries: Array<any>) {
        return this.loadFileds(queries);
    }

    /**
     * Load all available all mutations
     * @param {Array<any>} mutations
     * @return {[]}
     */
    static loadMutation(mutations: Array<any>) {
        return this.loadFileds(mutations);
    }

    /**
     * Load all fields
     * @param {Array<any>} fields
     * @return {[]}
     */
    static loadFileds(fields: Array<any>) {
        const newFields: any = {};
        for (const field of fields) {
            const fieldIntance = InstanceLoader.load(field);
            const instanceName = fieldIntance.constructor.name;
            const queryName = instanceName.charAt(0).toLowerCase() + instanceName.slice(1);
            newFields[queryName] = {
                type: fieldIntance.type(),
                args: fieldIntance.args(),
                description: fieldIntance.description(),
                extensions: fieldIntance.extensions,
                resolve: async function(parent: any, args: any, context: any) {
                    const middlewares = fieldIntance.middlewares();
                    for(const middleware of middlewares){
                        const middlewareInstance = InstanceLoader.load(middleware);
                        await middlewareInstance.execute(context.request, context.response);
                    }

                    return fieldIntance.resolve(parent, args, context.request, context);
                },
            };
        }
        return newFields;
    }
}

export default GraphQLLoader;
