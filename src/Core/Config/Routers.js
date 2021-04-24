import { Router } from "express";
import { Express } from 'express';
import Redirect from "../Controller/Redirect";
import ResponseData from "../Controller/ResponseData";
import View from "../Controller/View";
import Template from "../Template/Template";
class Routers {

     #_router = null;
     #_middleware = [];
     #_route = null;

     /**
      * 
      * @param {Express} app 
      */
     constructor() {
          this.#_router = Router();
     }

     /**
      * 
      * @param {string} route 
      * @param {[]} middleware 
      * @param {Function} callback 
      */
     group(route, middleware, callback) {
          let intance = new Routers();

        
          if(this.#_route != null){
               intance.#_route = `${this.#_route}${route}`;
          } else {
               intance.#_route = `${route}`;
          }
          this.#_router.use(intance.#_router);
          intance.#_middleware = [ ...this.#_middleware, ...middleware]
          callback(intance);
     }

     delete(route, middleware, controller, fn, additionalData = {}) {
          this.doRoute(route, middleware, controller, fn, additionalData, "DELETE")
     }

     put(route, middleware, controller, fn, additionalData = {}) {
          this.doRoute(route, middleware, controller, fn, additionalData, "PUT")
     }

     post(route, middleware, controller, fn, additionalData = {}) {
          this.doRoute(route, middleware, controller, fn, additionalData, "POST")
     }

     get(route, middleware, controller, fn, additionalData = {}) {
          this.doRoute(route, middleware, controller, fn, additionalData, "GET")
     }

     doRoute(route, middleware, controller, fn, additionalData = {}, method = "GET") {
         
          let currentRoute = route;
          if(this.#_route != null)
               currentRoute = `${this.#_route}${route}`;
        

          let resReq = async (req, res) => {

               let classController = controller;
               let controllerInstance = new classController();
               let data = controllerInstance[fn]({request : req, session : req.session, ...additionalData});
               let returnedData = null;
               if (data instanceof Promise) {
                    returnedData = await data;
               } else {
                    returnedData = data;
               }
               Routers.return(res, returnedData);
          }

          if(method.toUpperCase() == "GET")
               this.#_router.get(`${currentRoute}`, [ ...this.#_middleware, ...middleware], resReq );
          
          if(method.toUpperCase() == "POST")
               this.#_router.post(`${currentRoute}`, [...this.#_middleware, ...middleware], resReq );
          
          if(method.toUpperCase() == "PUT")
               this.#_router.put(`${currentRoute}`, [ ...this.#_middleware, ...middleware], resReq );
          
          if(method.toUpperCase() == "DELETE")
               this.#_router.delete(`${currentRoute}`, [ ...this.#_middleware, ...middleware], resReq );
     }

     getRouter() {
          return this.#_router;
     }

     static return(res, returnedData) {
          if (returnedData == undefined)
               res.status(400).send("Unexpexted Error, Method didnt return anything")
          if (returnedData instanceof ResponseData) {
               res.status(returnedData.code).json(returnedData.data);
          }

          if (returnedData instanceof View) {
               if (returnedData.type == "html")
                    res.send(returnedData.view);
               if (returnedData.type == "view")
                    res.render(returnedData.view, {...returnedData.data, ...Template()});
          }

          if (returnedData instanceof Redirect) {
               res.redirect(returnedData.route);
          }
     }
}

export default Routers;