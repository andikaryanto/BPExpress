/**
 * @class Redirect
 */
class Redirect {
    static #_instance: Redirect;
    route = '';
    data = {};

    /**
     *
     */
    constructor() {

    }

    /**
      *
      * @return {Redirect}
      */
    static getInstance(): Redirect {
        if (this.#_instance == null) {
            this.#_instance = new this;
        }
        return this.#_instance;
    }

    /**
      *
      * @param {string} route
      * @return {Redirect}
      */
    static to(route: string): Redirect {
        const instance = Redirect.getInstance();
        instance.route = route;
        return instance;
    }

    /**
      *
      * @param {{}} data
      * @return {Redirect}
      */
    with(data: {}): Redirect {
        this.data = data;
        return this;
    }
}

export default Redirect;
