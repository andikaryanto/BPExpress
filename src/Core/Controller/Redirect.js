class Redirect {
     static #_instance = null;
     route = "";

     constructor(){

     }

     /**
      * 
      * @returns {Redirect}
      */
     static getInstance(){
          if(this.#_instance == null);
               this.#_instance = new this;
          return this.#_instance;
     }

     static to(route) {
          let instance = Redirect.getInstance();
          instance.route = route;
          return instance;
     }
}

export default Redirect;