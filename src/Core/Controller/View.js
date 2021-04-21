class View {
     static #_instance = null;
     view = "";
     data = {};
     type = "view";

     constructor(){

     }

     /**
      * 
      * @returns {View}
      */
     static getInstance(){
          if(this.#_instance == null);
               this.#_instance = new this;
          return this.#_instance;
     }

     static make(view, data) {
          let instance = View.getInstance();
          instance.view = view;
          instance.data = data;
          instance.type = "view";
          return instance;
     }
     static html(view, data) {
          let instance = View.getInstance();
          instance.view = view;
          instance.data = data;
          instance.type = "html";
          return instance;
     }

     data(data){
          this.data = data;
          return this;
     }

}

export default View;