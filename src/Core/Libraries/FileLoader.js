import fs from 'fs';
import config from '../../../config';

/**
 * @class FileLoader
 */
class FileLoader {
    #_path = null;

    /**
     *
     * @param {string} path
     */
    constructor(path) {
        this.#_path = config.sourcePath + '/' + path;
    }

    /**
     * Get data as object
     * @return {{}}
     */
    getData() {
        const rawdata = fs.readFileSync(this.#_path);
        const json = JSON.parse(rawdata);
        return json;
    }
}

export default FileLoader;
