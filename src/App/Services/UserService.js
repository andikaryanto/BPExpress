import Jwt from '../../Core/Libraries/Jwt.js';
import Muser from '../Entity/Muser.js';
import CommonLib from '../Libraries/CommonLib.js';
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
     * @private {Jwt} #_jwt;
     */
    #_jwt;

    /**
     *
     * @param {CommonService} commonService
     * @param {MuserRepository} userRepository
     * @param {Jwt} jwt
     */
    constructor(commonService, userRepository, jwt) {
        this.#_commonService = commonService;
        this.#_userRepository = userRepository;
        this.#_jwt = jwt;
    }
    /**
      *
      * @param {string} username
      * @param {string} password
      * @return {Muser}
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

    /**
     * Create token of user login
     *
     * @param {string} username
     * @param {string} password
     * @return {string}
     */
    async getToken(username, password) {
        const user = await this.login(username, password);
        return this.#_jwt.sign(await user.toJson());
    }
}
export default UserService;
