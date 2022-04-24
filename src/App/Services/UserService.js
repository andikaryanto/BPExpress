import EntityUnit from '../../Core/Entity/EntityUnit.js';
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
     * @private {EntityUnit} #_eu;
     */
    #_eu;

    /**
     *
     * @param {CommonService} commonService
     * @param {MuserRepository} userRepository
     * @param {Jwt} jwt
     * @param {EntityUnit} eu
     */
    constructor(commonService, userRepository, jwt, eu) {
        this.#_commonService = commonService;
        this.#_userRepository = userRepository;
        this.#_jwt = jwt;
        this.#_eu = eu;
    }
    /**
      *
      * @param {string} username
      * @param {string} password
      * @return {Muser}
      */
    async login(username, password) {
        const userpassword = this.#_commonService.encryptMd5(CommonLib.getKey() + password);
        const filter = {
            where: {
                Username: username,
                Password: userpassword,
            },
        };

        const muser = await this.#_userRepository.findOne(filter);
        return muser;
    }

    /**
     *
     * @param {string} username
     * @param {string} password
     * @return {Muser}
     */
    async createUser(username, password) {
        const user = new Muser();
        user.setUsername(username);
        user.setPassword(this.hashPassword(password));
        await this.#_eu.preparePersistence(user).flush();
        return user;
    }

    /**
     *
     * @param {string} password
     * @return {string}
     */
    hashPassword(password) {
        return this.#_commonService.encryptMd5(CommonLib.getKey() + password);
    }
    /**
     * Create token of user login
     *
     * @param {string} username
     * @param {string} password
     * @return {string|null}
     */
    async getToken(username, password) {
        const user = await this.login(username, password);
        if (user) {
            return this.#_jwt.sign(await user.toJson());
        }
        return null;
    }
}
export default UserService;
