import jwt from 'jsonwebtoken';
import M_users from '../Models/M_users.js';
import {Request, Response, NextFunction} from 'express';

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const OfficeMiddleware = async function(req, res, next) {
    try {
        if (req.session.token == undefined || req.session.token == null) {
            res.redirect('/office/login');
        } else {
            const token = req.session.token;
            const decoded = jwt.decode(token, {complete: true});
            const muser = decoded.payload;
            const user = await M_users.findOrFail(muser.Id);
            next();
        }
    } catch (e) {
        res.redirect('/office/login');
    }
};

export default OfficeMiddleware;
