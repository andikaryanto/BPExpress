import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import PlainObject from '../Libraries/PlainObject';
import { NextFunction } from 'express-serve-static-core';
dotenv.config();

/**
 * @class Session
 */
class Session {
    static instance: Session | undefined;
    session = null;


    /**
      * @param {Request} expressRequest
      */
    constructor(expressRequest: Request) {
        this.session = expressRequest.session;
    }

    /**
      * @param {Request} req
      * @param {Response} res
      * @param {NextFunction} next
      */
    static session(req: Request, res: Response, next: NextFunction) {
        if (req.session.userlanguage == undefined) {
            req.session.userlanguage = null;
        }

        if (req.session.language == undefined && req.session.language == null) {
            req.session.language = process.env.APP_LANGUAGE;
        } else {
            if (req.session.language != process.env.APP_LANGUAGE) {
                req.session.language = process.env.APP_LANGUAGE;
            }
        }

        req.session.flashData = function flashData(key, value) {
            const instance = Session.getInstance();
            if (instance.flash == undefined) {
                instance.flash = {};
            }
            instance.flash = { ...instance.flash, [key]: value };
        };

        req.session.hasFlashData = function hasFlashData(key) {
            const instance = Session.getInstance();
            if (PlainObject.isEmpty(instance.flash)) {
                return false;
            }

            return instance.flash[key] != undefined && instance.flash[key] != null;
        };

        req.session.getFlashData = function getFlashData(key) {
            const instance = Session.getInstance();
            if (PlainObject.isEmpty(instance.flash)) {
                return null;
            }
            const value = instance.flash[key];
            delete instance.flash[key];
            return value;
        };

        Session.instance = new Session(req);
        next();
    }

    /**
     * get instance
     * @return {Session}
     */
    static getInstance() {
        if (this.instance != null) {
            return this.instance.session;
        }
        return this.instance;
    }
}

export default Session;
