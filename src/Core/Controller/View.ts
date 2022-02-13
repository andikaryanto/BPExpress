/**
 * @class View
 */
class View {
    private static instance: View;
    view:string = '';
    data: {} = {};
    type: string = 'view';

    /**
     *
     */
    private constructor() {

    }

    /**
      *
      * @return {View}
      */
    static getInstance(): View {
        if (this.instance == null) {
            this.instance = new this;
        }
        return this.instance;
    }

    /**
      * Render View path
      * @param {string} view
      * @param {{}} data
      * @return {View}
      */
    static make(view: string, data: {}): View {
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
    static html(view: string, data: {}): View {
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
    static sendFile(view: string, data: {}): View {
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
    setData(data: {}): View {
        this.data = data;
        return this;
    }
}

export default View;
