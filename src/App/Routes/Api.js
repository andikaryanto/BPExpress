import Routers from "../../Core/Config/Routers.js"
import GroupuserApi from "../Controllers/Rest/GroupuserApi.js";
import Shop from "../Controllers/Rest/Customer/Shop.js";
import UserApi from "../Controllers/Rest/UserApi.js";
import ApiMiddleware from "../Middlewares/ApiMiddleware.js";

const Api = () => {
     let routers = new Routers();
     routers.group("/user", [], routers => {
          routers.post("/login", [], UserApi, "login");
          routers.post("/save", [], UserApi, "store");
          routers.put("/update/:Id", [], UserApi, "update");
          routers.get("/list", [], UserApi, "list");
     });

     routers.group("/groupuser", [], routers => {
          routers.get("/list", [], GroupuserApi, "getList").named("groupuser.list");
     });

     routers.group("/shop", [ApiMiddleware], routers => {
          routers.get("/list", [], Shop, "getList");
     });

     return routers.getRouter();
}

export default Api;