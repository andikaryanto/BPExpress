/**
 * @class GraphQLField
 */
abstract class GraphQLField {
	/**
	 * Return type of the result
	 * @return {void}
	 */
	abstract type(): any;

	/**
	  * The arguments input
	 * @return {void}
	  */
	abstract args(): any

	/**
	  * Description of field
	 * @return {void}
	  */
	abstract description(): string

	/**
	 * List of middleware, executed before resolve
	 * @return {string[]|any}
	 */
	middlewares() {
		return [''];
	}

	/**
	  * Extension
	  * @param {{}} props
	 * @return {void}
	  */
	abstract extensions(props: any): {}

	/**
	  * Resolve data
	  * @param {any} parent
	  * @param {any} args
	  * @param {any} request
	  * @param {any} context
	  * @return {void}
	  */
	abstract resolve(parent: any, args: any, request: any, context: any): any
}

export default GraphQLField;
