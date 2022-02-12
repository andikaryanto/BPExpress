import CommonLib from '../Libraries/CommonLib.js';
import M_users from '../Models/M_users.js';
import MuserRepository from '../Repositories/MuserRepository.js';
import CommonService from './Library/CommonService.js';

/**
 * @class UserService
 */
class UserService {
    /**
     * @private {CommonService} #_commonService;
     */
    #_commonService;

    /**
     * @private {MuserRepository} #_userRepository;
     */
    #_userRepository;

    /**
     *
     * @param {CommonService} commonService
     * @param {MuserRepository} userRepository
     */
    constructor(commonService, userRepository) {
        this.#_commonService = commonService;
        this.#_userRepository = userRepository;
    }
    /**
      *
      * @param {string} username
      * @param {string} password
      * @return {M_users}
      */
    async login(username, password) {
        const userpassword = this.#_commonService.encryptMd5(CommonLib.getKey() + username + password);
        const filter = {
            where: {
                Password: userpassword,
            },
        };

        const muser = await this.#_userRepository.findOne(filter);
        return muser;
    }
}
export default UserService;
