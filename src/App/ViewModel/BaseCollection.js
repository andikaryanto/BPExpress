import CollectionModel from "../../Core/Model/CollectionModel";

class BaseCollection {

    #_collection = null;
    #_element = [];

    constructor(collection) {
        this.#_collection = collection;
    }

    shape(model){

    }

    /**
     * proceed shaping to view model
     */
    async proceed() {
        var arrayCollection = [];
        if (this.#_collection instanceof CollectionModel) {
            arrayCollection = this.#_collection.getItems();
        } else {
            arrayCollection = this.#_collection;
        }

        for (var  item of arrayCollection){
           await this.shape(item);
        }

        return this;
    }

    async proceedAndGetData(){
        return (await this.proceed()).getElements();
    }

    /**
     * Add item element
     */
    async addItem(viewModel) {
        var item = viewModel.toJson();
        
        if(viewModel.getAutoAddResource()){
            await viewModel.addResource(item);
        } 

        this.#_element.push(item);
        
    }


    /**
     * Get elemet
     */
    getElements() {
        return this.#_element;
    }


}

export default BaseCollection;