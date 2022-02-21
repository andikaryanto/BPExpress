/**
 * @class UploadedFile
 */
class UploadedFile {
    #_item = null;
    /**
     *
     * @param {{}} item
     */
    constructor(item) {
        this.#_item = item;
    }

    /**
     * Get item
     * @return {{}}
     */
    getItem() {
        return this.#_item;
    }

    /**
     * Get Item name
     * @return {string}
     */
    getName() {
        return this.#_item.name;
    }

    /**
     * Get item extension
     *
     * @return {string}
     */
    getExtension() {
        return this.getName().split('.')[1];
    }

    /**
     * Get item size
     * @return {number}
     */
    getSize() {
        return this.#_item.size;
    }

    /**
     * Get Item mimetype
     * @return {string}
     */
    getMimeType() {
        return this.#_item.mimetype;
    }

    /**
     * Upload file to specific path
     *
     * @param {string} uploadPath
     * @param {Function} callback
     * @return {void}
     */
    move(uploadPath, callback) {
        return this.#_item.mv(uploadPath, callback);
    }
}

export default UploadedFile;
