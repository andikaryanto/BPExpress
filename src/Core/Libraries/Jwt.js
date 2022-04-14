import CommonLib from '../../App/Libraries/CommonLib';
import jwt from 'jsonwebtoken';

/**
 * @class FileLoader
 */
class Jwt {
    sign(payload) {
        const token = jwt.sign(payload, CommonLib.getKey());
        return token;
    }
}
export default Jwt;
