class BaseViewModel {

    model = null;
    #_autoAddResource = false;

    constructor(autoAddResource, model){
        this.model = model;
        this.#_autoAddResource = autoAddResource;
    }

    addResource(viewModel){

    }

    setAutoAddResource(addResource = true){
        this.#_autoAddResource = addResource;
    }

    getAutoAddResource(){
        return this.#_autoAddResource
    }

}

export default BaseViewModel;