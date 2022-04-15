
import CommonLib from '../../Libraries/CommonLib.js';
import BaseController from '../BaseController.js';
import jwt from 'jsonwebtoken';
import e from 'express';
import M_users from '../../Models/M_users.js';
import Controller from '../../../Core/Controller/Controller.js';
import Redirect from '../../../Core/Controller/Redirect.js';
import View from '../../../Core/Controller/View.js';
import ResponseData from '../../../Core/Controller/ResponseData.js';
import ModelError from '../../Errors/ModelError.js';
import UserService from '../../Services/UserService.js';

/**
 * @clsas LoginController
 */
class LoginController extends Controller {

    /**
     * @var {UserService}
     */
    #_userService;

    /**
     * 
     * @param {UserService} userService 
     */
    constructor(
        userService
    ){
        super();
        this.#_userService = userService;
    }

    /**
     * Go to user login /office/login
     * @method GET
     * @param {*} param0
     * @return {Redirect|View}
     */
    async index({request, session, ...props}) {
        try {
            if (session.token != undefined || session.token == null) {
                const token = req.session.token;
                const decoded = jwt.decode(token, {complete: true});
                const muser = decoded.payload;
                await M_users.findOrFail(muser.Id);
                return Redirect.to('/office/mgroupuser');
            } else {
                return View.make('office/login/login', {title: 'Hey', message: 'Hello there!'});
            }
        } catch (e) {
            return View.make('office/login/login', {title: 'Hey', message: 'Hello there!'});
        }
    }

    /**
     * do login for a user /office/login/dologin
     * @method POST
     * @param {*} param0
     * @return {Redirect}
     */
    async doLogin({request, session}) {
        try {
            const body = request.body;
            const token = await this.#_userService.getToken(body.Username, body.Password, true);
            if (CommonLib.isNull(token)) {
                throw new ModelError('Data pengguna tidak valid');
            }

            session.token = token;
            session.userlanguage = 'id';
            session.save();
            return Redirect.to('/office/mgroupuser');
        } catch (e) {
            session.flashData('error', e.message);
            return Redirect.to('/office/login');
        }
    }


    /**
     * do login for a user /office/login/dologout
     * @method GET
     * @param {*} param0
     * @return {Redirect|View}
     */
    async doLogout({request, session}) {
        session.destroy();
        return Redirect.to('/office/login');
    }
}

export default LoginController;
