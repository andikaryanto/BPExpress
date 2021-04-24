import Controller from "../../Core/Controller/Controller.js";
import ResponseData from "../../Core/Controller/ResponseData.js";
import View from "../../Core/Controller/View.js";
import UploadedFileError from "../../Core/Errors/UploadedFileError.js";
import DateFormat from "../../Core/Libraries/DateFormat.js";
import File from "../../Core/Libraries/File.js";
import M_groupusers from "../Models/M_groupusers.js";
import M_users from "../Models/M_users.js";

class TestController extends Controller {

     constructor() {
          super();
     }
     async index({request}) {

          try {
               let users = await M_groupusers.collect();
               let n = new M_groupusers();
               users.add(n);
               return ResponseData.status(200).json({...users.getItems(), csrf : request.csrfToken()})
          } catch (e) {
               return ResponseData.status(200).json({ message: e.message })
          }

          // var g = new M_groupusers();
          // M_groupusers.findAll();
          // res.send("asdasd");

     }

     form({request}){

          return View.make("test/form");
     }

     formPost({error}){
          return ResponseData.status(200).json({message : "berhasil"});
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

               if (Array.isArray(files)) {
                    for (let img in files) {
                         if (! await file.upload(files[img])) {
                              throw new UploadedFileError("Gagal")
                         }
                    }
               } else {
                    if (! await file.upload(files)) {
                         throw new UploadedFileError("Gagal")
                    }
               }
               res.send("upload");
          } catch (e) {
               res.send(e.message);
          }
     }

     async test() {
          let users = await M_groupusers.findAll();
          this.reponse.send(users);
     }

     param({session, params}){
          return ResponseData.status(200).json({ Id : params.Id, No : params.No, ...session});
     }

}

export default TestController;