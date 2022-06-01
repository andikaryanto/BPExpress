import UserService from '../../Services/UserService';
import ResponseCode from '../../Constants/ResponseCode';
import jwt from 'jsonwebtoken';
import CommonLib from '../../Libraries/CommonLib';
import DbTrans from '../../../Core/Database/DbTrans';
import Controller from '../../../Core/Controller/Controller';
import ResponseData from '../../../Core/Controller/ResponseData';
/**
 * @class UserApi
 */
class UserApi extends Controller {
    /**
     *
     * @property {UserService} userService
     */
    protected userService;

    /**
     *
     * @param {UserService} userService
     */
    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }
    /**
     * User Login \api\user\login
     * @method POST
     * @param {*} request
     * @return {ResponseData}
     */
    async login({request}: any) {
        try {
            const body = request.body;
            const user = await this.userService.login(body.Username, body.Password);

            if (CommonLib.isNull(user)) {
                throw new Error('Data pengguna tidak valid');
            }
            let token = '';
            if (user) {
                 token = jwt.sign(user.toJson(), CommonLib.getKey());
            }

            const result = {
                Message: 'Login Berhasil',
                Token: token,
                Response: ResponseCode.OK,
            };

            return ResponseData.status(200).json(result);
        } catch (e) {
            let result = {};
            if (e instanceof Error) {
                result = {
                    Message: e.message,
                    Data: null,
                    Response: ResponseCode.INVALID_LOGIN,
                };
            }
            return ResponseData.status(400).json(result);
        }
    }

    /**
      * Create user data \api\user\save
      * @method POST
      * @param {*} request
      * @return {ResponseData}
      */
    async store({request}: any) {
        // const body = request.body;
        // const trx = await DbTrans.beginTransaction();
        // try {
        //     const user = new M_users();
        //     user.parseFromRequest();
        //     user.setPassword(body.Password);
        //     await user.save(trx);
        //     trx.commit();
        //     return ResponseData.status(200).json(user);
        // } catch (e) {
        //     trx.rollback();
        //     result = {
        //         Message: e.message,
        //         Data: null,
        //         Response: ResponseCode.FAILED_SAVE_DATA,
        //     };
        //     return ResponseData.status(400).json(user);
        // }
    }

    /**
      * Create user data \api\user\update\:id
      * @method PUT
      * @param {*} request
      * @return {ResponseData}
      */
    async update({request}: any) {
        // const Id = request.params.Id;
        // const trx = await DbTrans.beginTransaction();
        // try {
        //     const user = await M_users.find(Id);
        //     user.Username = 'andik';
        //     await user.save(trx);
        //     trx.commit();
        //     return ResponseData.status(200).json(user);
        // } catch (e) {
        //     trx.rollback();
        //     result = {
        //         Message: e.message,
        //         Data: null,
        //         Response: ResponseCode.FAILED_SAVE_DATA,
        //     };
        //     return ResponseData.status(400).json(user);
        // }
    }

    /**
      * Get user data list \api\user\list
      * @method PUT
      * @param {*} request
      * @return {ResponseData}
      */
    async list({request}: any) {
        // try {
        //     const users = await M_users.findAll();
        //     return ResponseData.status(200).json(users);
        // } catch (e) {
        //     result = {
        //         Message: e.message,
        //         Data: null,
        //         Response: ResponseCode.FAILED_SAVE_DATA,
        //     };
        //     return ResponseData.status(400).json(user);
        // }
    }
}

export default UserApi;
