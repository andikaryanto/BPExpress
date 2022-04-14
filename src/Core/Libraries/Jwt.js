import CommonLib from '../../App/Libraries/CommonLib';
import jwt from 'jsonwebtoken';

/**
 * @class FileLoader
 */
class Jwt {
    /**
     * Create token
     * @param {any} payload
     * @return {string}
     */
    sign(payload) {
        const token = jwt.sign(payload, CommonLib.getKey());
        return token;
    }
}
export default Jwt;
