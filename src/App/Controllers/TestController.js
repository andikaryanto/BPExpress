import Controller from "../../Core/Controller/Controller.js";
import UploadedFileError from "../../Core/Errors/UploadedFileError.js";
import DateFormat from "../../Core/Libraries/DateFormat.js";
import File from "../../Core/Libraries/File.js";
import M_groupusers from "../Models/M_groupusers.js";
import M_users from "../Models/M_users.js";

class TestController extends Controller {

     constructor(){
          super();
     }
     static async index(req, res) {

          try {
               let users = await M_groupusers.paginate({}, 4, 1, 5);
               res.send(users);
          } catch (e) {
               res.send(e.message);
          }

          // var g = new M_groupusers();
          // M_groupusers.findAll();
          // res.send("asdasd");

     }


     /**
      * 
      * @param {import("express").Request} req 
      * @param {import("express").Response} res 
      */
     static async uploadtest(req, res) {
          res.render("test");
     }

     /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
     static async doUpload(req, res) {
          try {
               let file = new File("assets/upload/file", 2000, ["jpg", "png"]);
               let files = req.getFiles("file");
               
               if(Array.isArray(files)){
                    for(let img in files) {
                         if (! await file.upload(files[img])) {
                              throw new UploadedFileError("Gagal")
                         }
                         console.log(file.getFileUrl())
                    }
               } else {
                    if (! await file.upload(files)) {
                         throw new UploadedFileError("Gagal")
                    }
                    console.log(file.getFileUrl())
               }
               res.send("upload");
          } catch (e) {
               res.send(e.message);
          }
     }

     async test(){
          let users = await M_groupusers.findAll();
          this.reponse.send(users);
     }

}

export default TestController;