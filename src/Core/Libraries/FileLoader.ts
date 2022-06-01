import fs from 'fs';
import config from '../../config';

/**
 * @class FileLoader
 */
class FileLoader {
    private path: string;

    /**
     *
     * @param {string} path
     */
    constructor(path: string) {
        this.path = config.sourcePath + '/' + path;
    }

    /**
     * Get data as object
     * @return {{}}
     */
    getData(): {} {
        const rawdata = fs.readFileSync(this.path);
        const json = JSON.parse(rawdata.toString());
        return json;
    }
}

export default FileLoader;
