import Cast from '../Traits/Cast.js';
import BaseModel from './BaseModel.js';
/**
 * @class M_productcategories
 */
class M_productcategories extends BaseModel {
    Id = null;
    Name = null;
    Picture = null;
    Description = null;
    Created = null;
    CreatedBy = null;
    Modified = null;
    ModifiedBy = null;

    /**
     *
     */
    constructor() {
        super('m_productcategories', 'Id');
        this.addTrait(Cast);
    }

    /**
     *
     * @return {M_productcategories}
     */
    validate() {
        // let vRules = this.validationRules();
        // let validation = this.validateRules(vRules.rules, vRules.errors);
        // validation.setAttributeNames(vRules.attributName);
        // if (validation.fails()) {
        //      for (const [key, value] of Object.entries(validation.errors.errors)) {
        //           throw new ModelError(value[0]);
        //      }
        // }
        return this;
    }

    /**
     *
     * @return {{}}
     */
    validationRules() {
        const rulesAndError = {
            rules: {
                GroupName: 'required|min:10|email',
            },
            errors: {
                required: ':attribute Harus Isi',
                min: {
                    string: ':attribute Harus lebih dari 10 karakter',
                },
                email: ':attribute Bukan email',
            },
            attributName: {
                GroupName: 'Nama Grup',
            },
        };

        return rulesAndError;
    }

    // _change_GroupName(){
    //      this.GroupName = "Changed";
    // }
}


export default M_productcategories;