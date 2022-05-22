import {GraphQLList} from 'graphql';

/**
 * @class GraphQLField
 */
class GraphQLField {
    /**
     * Return type of the result
     * @return {GraphQLList}
     */
    type() {
        return new GraphQLList();
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
      * Extension
      * @param {{}} param
      * @return {any}
      */
    extensions({document, variables, operationName, result, context}) {
        return '';
    }

    /**
      * Resolve data
      * @param {any} parent
      * @param {any} args
      * @param {any} context
      * @return {[]}
      */
    async resolve(parent, args, context) {

    }
}

export default GraphQLField;
