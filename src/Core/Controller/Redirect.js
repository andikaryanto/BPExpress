class Redirect {
     static #_instance = null;
     route = "";
     data = {};

     constructor() {

     }

     /**
      * 
      * @returns {Redirect}
      */
     static getInstance() {
          if (this.#_instance == null);
          this.#_instance = new this;
          return this.#_instance;
     }

     /**
      * 
      * @param {string} route 
      * @returns {Redirect}
      */
     static to(route) {
          let instance = Redirect.getInstance();
          instance.route = route;
          return instance;
     }

     /**
      * 
      * @param {{}} data 
      * @returns {Redirect}
      */
     with(data) {
          this.data = data;
          return this;
     }
}

export default Redirect;