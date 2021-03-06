import Routers from "../../Core/Config/Routers.js"
import VerifyCsrf from "../../Core/Middleware/VerifyCsrf.js";
import LoginController from "../Controllers/Office/LoginController.js";
import MgroupuserController from "../Controllers/Office/MgroupuserController.js";
import MuserController from "../Controllers/Office/MuserController.js";
import TestController from "../Controllers/TestController.js";
import ApiMiddleware from "../Middlewares/ApiMiddleware.js";
import OfficeMiddleware from "../Middlewares/OfficeMiddleware.js";
import M_groupusers from "../Models/M_groupusers.js";

const Web = () => {
     let routers = new Routers();

     routers.get("/",[], LoginController,"index");
     routers.get("/test",[], TestController,"index").named('named.test');
     routers.get("/test/form",[], TestController,"form");
     routers.post("/test/formpost",[], TestController,"formPost");
     routers.get("/test/params/:Id/:No",[], TestController,"param");

     routers.get("/office", [], LoginController, "index");
     routers.get("/office/login", [], LoginController, "index");
     routers.post("/office/dologin", [], LoginController, "doLogin");
     routers.get("/office/dologout", [], LoginController, "doLogout");

     routers.group("/office",[ OfficeMiddleware ], routers => {
          routers.group("/mgroupuser", [], routers => {
               routers.get("", [], MgroupuserController, "index");
               routers.get("/:Id/edit", [], MgroupuserController, "getById", {routedata : "This data is sent from routing"});
               routers.post("/getalldata", [], MgroupuserController, "getAllData");
               routers.group("/data", [], function(routers){
                    routers.get("/list", [], MgroupuserController, "list")
               })
          });

          routers.group("/muser", [], routers => {
               routers.get("", [], MuserController, "index");
               routers.post("/getalldata", [], MuserController, "getAllData");
          });
     });
     
     routers.group("/customer",[], function(routers){
          routers.get("", [], MuserController, "index");
     })
     return routers.getRouter();
}

export default Web;