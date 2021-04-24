import Routers from "../../Core/Config/Routers.js"
import GroupuserApi from "../Controllers/Rest/GroupuserApi.js";
import UserApi from "../Controllers/Rest/UserApi.js";

const Api = () => {
     let routers = new Routers();
     routers.group("/user", [], routers => {
          routers.post("/login", [], UserApi, "login");
          routers.post("/save", [], UserApi, "store");
          routers.put("/update/:Id", [], UserApi, "update");
     });

     routers.group("/groupuser", [], routers => {
          routers.get("/list", [], GroupuserApi, "getList");
     });

     return routers.getRouter();
}

export default Api;