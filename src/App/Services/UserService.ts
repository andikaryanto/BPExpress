import EntityUnit from '../../Core/Entity/EntityUnit';
import Jwt from '../../Core/Libraries/Jwt';
import Muser from '../Entity/Muser';
import CommonLib from '../Libraries/CommonLib';
import MuserRepository from '../Repositories/MuserRepository';
import CommonService from './Library/CommonService';

/**
 * @class UserService
 */
class UserService {
    /**
     * @private {CommonService} protected commonService;
     */
    protected commonService;

    /**
     * @private {MuserRepository} protected userRepository;
     */
    protected userRepository;

    /**
     * @private {Jwt} protected jwt;
     */
    protected jwt;

    /**
     * @private {EntityUnit} protected eu;
     */
    protected eu;

    /**
     *
     * @param {CommonService} commonService
     * @param {MuserRepository} userRepository
     * @param {Jwt} jwt
     * @param {EntityUnit} eu
     */
    constructor(
        commonService: CommonService, 
        userRepository: MuserRepository, 
        jwt: Jwt, 
        eu: EntityUnit) {
        this. commonService = commonService;
        this. userRepository = userRepository;
        this. jwt = jwt;
        this. eu = eu;
    }
    /**
      *
      * @param {string} username
      * @param {string} password
      * @return {Muser}
      */
    async login(username: string, password: string) {
        const userpassword = this. commonService.encryptMd5(CommonLib.getKey() + password);
        const filter = {
            where: {
                Username: username,
                Password: userpassword,
            },
        };

        const muser = await this.userRepository.findOne(filter);
        return muser;
    }

    /**
     *
     * @param {string} username
     * @param {string} password
     * @return {Muser}
     */
    async createUser(username: string, password: string) {
        const user = new Muser();
        user.setUsername(username);
        user.setPassword(this.hashPassword(password));
        await this. eu.preparePersistence(user).flush();
        return user;
    }

    /**
     *
     * @param {string} password
     * @return {string}
     */
    hashPassword(password: string) {
        return this. commonService.encryptMd5(CommonLib.getKey() + password);
    }
    /**
     * Create token of user login
     *
     * @param {string} username
     * @param {string} password
     * @return {string|null}
     */
    async getToken(username: string, password: string) {
        const user = await this.login(username, password);
        if (user) {
            return this. jwt.sign(await user.toJson());
        }
        return null;
    }
}
export default UserService;
