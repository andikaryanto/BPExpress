import CommonLib from '../../Libraries/CommonLib';
/**
 * @class CommonService
 */
class CommonService {
    /**
     *
     * @param {string} value
     * @return {string}
     */
    encryptMd5(value) {
        return CommonLib.encryptMd5(value);
    }
}

export default CommonService;