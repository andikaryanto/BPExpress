import ModelError from "../Errors/ModelError.js";
import Cast from "../Traits/Cast.js";
import BaseModel from "./BaseModel.js";
import M_products from "./M_products.js";

class M_shopproducts extends BaseModel {

     Id = null;
     M_Shop_Id = null;
     M_Product_Id = null;
     PurchasePrice = null;
     SellPrice = null;
     Stock = null;
     DiscountType = null;
     DiscountValue = null;
     IsFeatured = null;
     IsActive = null;
     Ordering = null;
     Created = null;
     CreatedBy = null;
     Modified = null;
     ModifiedBy = null;

     constructor() {
          super("m_shopproducts", "Id");
          this.addTrait(Cast);
     }

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

     validationRules() {
          let rulesAndError = {
               rules: {
                    GroupName: 'required|min:10|email'
               },
               errors: {
                    required: ":attribute Harus Isi",
                    min: {
                         string: ":attribute Harus lebih dari 10 karakter"
                    },
                    email: ":attribute Bukan email"
               },
               attributName: {
                    GroupName: "Nama Grup"
               }
          };

          return rulesAndError;
     }

     async M_Product(){
          var product = await M_products.find(this.M_Product_Id);
          return product;
     }

}


export default M_shopproducts;