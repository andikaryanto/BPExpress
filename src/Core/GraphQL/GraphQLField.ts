import {GraphQLList, GraphQLString} from 'graphql';

/**
 * @class GraphQLField
 */
class GraphQLField {
    /**
     * Return type of the result
     * @return {GraphQLList}
     */
    type() {
        return new GraphQLList(GraphQLString);
    }

    /**
      * The arguments input
      * @return {{}}
      */
    args() {
        return {};
    }

    /**
      * Description of field
      * @return {string}
      */
    description() {
        return '';
    }

    /**
     * List of middleware, executed before resolve
     * @return {string[]|any}
     */
    middlewares(){
      return [''];
    }

    /**
      * Extension
      * @param {{}} param
      * @return {any}
      */
    extensions(props: any) {
        return '';
    }

    /**
      * Resolve data
      * @param {any} parent
      * @param {any} args
      * @param {any} request
      * @param {any} context
      * @return {any}
      */
    async resolve(parent: any, args: any, request: any, context: any) {
      return ['']
    }
}

export default GraphQLField;
