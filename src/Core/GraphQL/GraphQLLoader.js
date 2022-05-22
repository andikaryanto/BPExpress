import InstanceLoader from '../Express/InstanceLoader';

/**
 * @class GraphQLLoader
 */
class GraphQLLoader {
    /**
     * Load all available all queries
     * @param {[]} queries
     * @return {[]}
     */
    static loadQuery(queries) {
        return this.loadFileds(queries);
    }

    /**
     * Load all available all mutations
     * @param {[]} mutations
     * @return {[]}
     */
    static loadMutation(mutations) {
        return this.loadFileds(mutations);
    }

    /**
     * Load all fields
     * @param {[]} fields
     * @return {[]}
     */
    static loadFileds(fields) {
        const newFields = {};
        for (const field of fields) {
            const fieldIntance = InstanceLoader.load(field);
            const instanceName = fieldIntance.constructor.name;
            const queryName = instanceName.charAt(0).toLowerCase() + instanceName.slice(1);
            newFields[queryName] = {
                type: fieldIntance.type(),
                args: fieldIntance.args(),
                description: fieldIntance.description(),
                extensions: fieldIntance.extensions,
                resolve: async function(parent, args, context) {
                    return fieldIntance.resolve(parent, args, context);
                },
            };
        }
        return newFields;
    }
}

export default GraphQLLoader;
