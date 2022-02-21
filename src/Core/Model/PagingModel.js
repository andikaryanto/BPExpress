import Model from './Model';

/**
 * Class PagingModel
 */
class PagingModel {
    #_model = '';
    #_filter = {};
    #_page = 1;
    #_size = 1;
    #_showedPage = null;

    #_outputs = {
        CurrentPage: null,
        TotalPage: null,
        Data: null,
        TotalData: null,
        ShowingPage: [],
        GetQuery: null,

    };

    /**
   * Constructor
   * @param {Model} model
   * @param {{}} filter
   * @param {number} page
   * @param {number} size
   * @param {number} showedPage
   * @param {{}} queryParams
   */
    constructor(model, filter = {}, page = 1, size = 6, showedPage = 5, queryParams = {}) {
        this.#_model = model;
        this.#_filter = filter;
        this.#_size = size;
        this.#_showedPage = showedPage;
        this.#_outputs.CurrentPage = Number(page);

        // this.#_outputs.GetQuery = this.createGetParam(queryParams);

        if (! Number.isInteger(page)) {
            this.#_page = 1;
        } else {
            this.#_page = page;
        }
    }

    /**
   * Set Paging Available
   */
    setPaging() {
        const showedPage = this.#_showedPage;
        const expandedPage = Math.floor(showedPage / 2);

        let lastPage = this.#_page + expandedPage;
        let firstPage = lastPage - showedPage + 1;

        if (firstPage <= 0) {
            firstPage = 1;
        }

        if (this.#_outputs.TotalPage <= showedPage) {
            lastPage = this.#_outputs.TotalPage;
            if (showedPage - firstPage !== showedPage - 1) {
                firstPage = 1;
            }
        } else {
            if (this.#_page < (lastPage - expandedPage)) {
                lastPage = showedPage;
                if (lastPage > this.#_outputs.TotalPage) {
                    lastPage = this.#_outputs.TotalPage;
                }
            } else {
                if (this.#_page < (lastPage - expandedPage) || lastPage < showedPage) {
                    lastPage = showedPage;
                }
                if (this.#_page >= this.#_outputs.TotalPage - expandedPage) {
                    lastPage = this.#_outputs.TotalPage;
                    firstPage = this.#_outputs.TotalPage - (expandedPage * 2);
                }
            }
        }

        for (let i = firstPage; i <= lastPage; i++) {
            this.#_outputs.ShowingPage.push(i);
        }
    }

    /**
	 * Set Parameter
	 * @return {{}}
	 */
    setParams() {
        const params = this.#_filter;
        params.page = this.#_page,
        params.size = this.#_size;

        return params;
    }

    /**
	 * Fetch all data
	 * @return {{}}
	 */
    async fetch() {
        try {
            const params = this.setParams();
            const result = await this.#_model.findAll(params);

            const countAllData = await this.allData(params);
            this.#_outputs.TotalPage = Math.ceil(Number(countAllData) / this.#_size);
            this.#_outputs.Data = result;
            this.#_outputs.TotalData = countAllData;
            this.setPaging();
        } catch (e) {
            this.#_outputs.Error = e.message;
        }

        return this.#_outputs;
    }

    /**
	 * count All data
	 * @param {*} filter
	 * @return {number}
	 */
    async allData(filter = {}) {
        delete filter.page;
        delete filter.size;
        return await this.#_model.count(filter);
    }
}

export default PagingModel;
