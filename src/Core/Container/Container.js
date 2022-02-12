class Container{
    static #_instance;
    containerBuilder = null;

    constructor(){

    }

    static getInstance(){
        if(this.#_instance == null)
            this.#_instance = new this;
        return this.#_instance;
    }

    setContainerBuilder(containerBuilder){
        this.containerBuilder = containerBuilder;
        return this;
    }

    get(key){ 
        return this.containerBuilder.get(key);
    }
}

export default Container;