import fs from 'fs';
import appRoot from 'app-root-path';

/**
 * @class FileLoader
 */
class FileLoader {
    private path!: string;

    /**
     *
     * @param {string} path
     */
    constructor(path: string) {
        this.path = appRoot + '/' + path;
    }

    /**
     * Get data as object
     * @return {any}
     */
    getData(): any {
        const rawdata = fs.readFileSync(this.path);
        const json = JSON.parse(rawdata.toString());
        return json;
    }
}

export default FileLoader;
