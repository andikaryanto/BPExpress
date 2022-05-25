import {GraphQLList, GraphQLString} from 'graphql';

/**
 * @class GraphQLField
 */
abstract class GraphQLField {
    /**
     * Return type of the result
     * @return {any}
     */
    abstract type(): any

    /**
      * The arguments input
      * @return {{}}
      */
    abstract args(): any

    /**
      * Description of field
      * @return {string}
      */
    abstract description(): string

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
    abstract extensions(props: any): {}

    /**
      * Resolve data
      * @param {any} parent
      * @param {any} args
      * @param {any} request
      * @param {any} context
      * @return {any}
      */
    abstract resolve(parent: any, args: any, request: any, context: any) : any
}

export default GraphQLField;
