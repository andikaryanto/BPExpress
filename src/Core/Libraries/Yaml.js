import yaml from 'js-yaml';
import fs from 'fs';
import approot from 'app-root-path';
/**
 * @class Yaml
 */
class Yaml {
    /**
     *
     * @param {string} path
     * @param {string} key
     * @return {{}}
     */
    static load(path, key = null) {
        const value = yaml.load(fs.readFileSync(approot + '/' + path + '.yml', 'utf8'));
        if (key != null) {
            return value[key];
        }
        return value;
    }
}

export default Yaml;
