import CommonLib from '../Libraries/CommonLib.js';
import M_users from '../Models/M_users.js';

/**
 * @class UserProc
 */
class UserProc {
    /**
      *
      * @param {string} username
      * @param {string} password
      * @return {M_users}
      */
    static async login(username, password) {
        const userpassword = CommonLib.encryptMd5(CommonLib.getKey() + username + password);
        const filter = {
            where: {
                Password: userpassword,
            },
        };

        const muser = await M_users.findOne(filter);
        return muser;
    }
}
export default UserProc;
