/**
 * @class UploadedFile
 */
class UploadedFile {
    protected item: any = null;
    /**
     *
     * @param {{}} item
     */
    constructor(item: any) {
        this.item = item;
    }

    /**
     * Get item
     * @return {{}}
     */
    getItem() {
        return this.item;
    }

    /**
     * Get Item name
     * @return {string}
     */
    getName() {
        return this.item.name;
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
        return this.item.size;
    }

    /**
     * Get Item mimetype
     * @return {string}
     */
    getMimeType() {
        return this.item.mimetype;
    }

    /**
     * Upload file to specific path
     *
     * @param {string} uploadPath
     * @param {Function} callback
     * @return {void}
     */
    move(uploadPath: string, callback: Function) {
        return this.item.mv(uploadPath, callback);
    }
}

export default UploadedFile;
