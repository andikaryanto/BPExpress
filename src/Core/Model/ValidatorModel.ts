import Validator from 'validatorjs';
/**
 * @class ValidatorModel
 */
class ValidatorModel {
    /**
	 *
	 * @param {{}} object
	 * @param {[]} rules
	 * @param {{}} customError
	 * @return {Validator}
	 */
    static validate(object, rules, customError = {}) {
        const validator = new Validator(object, rules, customError);
        return validator;
    }
}

export default ValidatorModel;
