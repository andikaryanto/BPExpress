class Collection {
     items = [];

     /**
      * 
      * @param {[]} items 
      */
     constructor(items) {
          this.items = items;
     }

     /**
      * add data to collection
      */
     add(item) {
          this.items.push(item);
          return this;
     }

     /**
      * Filter data with Function parameter
      * @param {Function} callback 
      * @returns 
      */
     filter(callback) {
          let newdata = [];
          this.items.forEach((item, i) => {
               if (callback(item)) {
                    newdata.push(item);
               }
          });
          this.items = newdata;
          return this;
     }

     /**
      * 
      * @param {Function} callback 
      * @returns {[]}
      */
     where(callback) {
          let newdata = [];
          for(let item of this.items) {
               if (callback(item)) {
                    newdata.push(item);
               }
          }
          return newdata;
     }

     /**
      * 
      * @returns {boolean}
      */
     isEmpty() {
          return this.items.length == 0;
     }

     /**
      * 
      * @param {number} number 
      * @returns {[]}
      */
     take(number) {
          if (number <= 0)
               throw new Error("Number must be greater than 0 (zero)");

          if (this.items.length < number) {
               return this.items;
          } else {
               return this.items.slice(0, number);
          }
     }
     
     /**
      * 
      * @returns {number}
      */
     size() {
          return this.items.length;
     }

     /**
      * 
      * @returns {[]}
      */
     getItems() {
          return this.items;
     }

     /**
      * 
      * @returns {[]}
      * @throws {Error}
      */
     getItemsOrFail() {
          if (this.isEmpty())
               throw new Error("No Data Found");

          return this.items;
     }
}

export default Collection;