import ResponseCode from "../Constants/ResponseCode.js";
import jwt from "jsonwebtoken";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const GraphqlMiddleware = function (req, res, next) {
     try {
          let token = req.headers.authorization;
          if (token == undefined || token == null) {
               throw new Error("Token anda Kosong")
          }

          let decoded = jwt.decode(token, {complete : true});
          if(decoded == null)
               throw new Error("Invalid Token");

     } catch (e) {
          req.graphqlError = e;
     }

     next();
}

export default GraphqlMiddleware;