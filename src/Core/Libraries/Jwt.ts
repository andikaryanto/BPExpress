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
    sign(payload: any) {
        const token = jwt.sign(payload, CommonLib.getKey());
        return token;
    }

    /**
     * Create token
     *
     * @param {string} token
     * @param {{}} option
     * @return {jwt.Jwt}
     */
    decode(token: string, option = {}) {
        return jwt.decode(token, option);
    }
}
export default Jwt;
