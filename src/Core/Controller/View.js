/**
 * @class View
 */
class View {
    static #_instance = null;
    view = '';
    data = {};
    type = 'view';

    /**
     *
     */
    constructor() {

    }

    /**
      *
      * @return {View}
      */
    static getInstance() {
        if (this.#_instance == null)
            this.#_instance = new this;
        return this.#_instance;
    }

    /**
      * Render View path
      * @param {string} view
      * @param {{}} data
      * @return {View}
      */
    static make(view, data) {
        const instance = View.getInstance();
        instance.view = view;
        instance.data = data;
        instance.type = 'view';
        return instance;
    }

    /**
      * Render View path
      * @param {string} view
      * @param {{}} data
      * @return {View}
      */
    static html(view, data) {
        const instance = View.getInstance();
        instance.view = view;
        instance.data = data;
        instance.type = 'html';
        return instance;
    }

    /**
      * Render View path
      * @param {string} view
      * @param {{}} data
      * @return {View}
      */
    static sendFile(view, data) {
        const instance = View.getInstance();
        instance.view = view;
        instance.data = data;
        instance.type = 'sendFile';
        return instance;
    }

    /**
      * Send data
      * @param {{}} data
      * @return {View}
      */
    data(data) {
        this.data = data;
        return this;
    }
}

export default View;
