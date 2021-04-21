import ResponseData from "../../../Core/Controller/ResponseData.js";
import View from "../../../Core/Controller/View.js";
import ResponseCode from "../../Constants/ResponseCode.js";
import ModelError from "../../Errors/ModelError.js";
import M_users from "../../Models/M_users.js";

class MuserController {

     async index() {
          try {
               return View.make('office/m_user/index', { title: 'Pengguna' });
          } catch (e) {
               var result = {
                    Message: e.message,
                    Data: null,
                    Response: ResponseCode.DATA_NOT_FOUND
               }

               return ResponseData.status(400).json(result);
          }
     }


     async getAllData() {
          try {
               let filter = {
                    join: {
                         "m_groupusers": {
                              type: "Left",
                              key: [
                                   "m_users.M_Groupuser_Id",
                                   "m_groupusers.Id"
                              ]
                         }
                    },
                    whereNot : {
                         Username : "super_admin"
                    }
               }
               let datatables = M_users.datatables(filter);
               datatables.addDtRowClass('rowdetail').
                    addDtRowId('m_users.Id').
                    addColumn(
                         'm_users.Id',
                         null,
                         null,
                         false,
                         false
                    ).
                    addColumn(
                         '',
                         null,
                         function (row, i) {
                              return i + 1;
                         },
                         false,
                         false
                    ).
                    addColumn(
                         'm_users.Username',
                    ).
                    addColumn(
                         'm_groupusers.GroupName',
                    ).
                    addColumn(
                         'm_users.Created',
                         null,
                         null,
                         false
                    ).
                    addColumn(
                         '',
                         null,
                         function (row, id) {
                              return `<a href='#' class='btn btn-info edit' data-bs-toggle='modal' data-bs-target='#ubahModal'>Ubah</a>
                              <a href='#' class='btn btn-danger delete' data-bs-toggle='modal' data-bs-target='#hapusModal'>Hapus</a>`;
                         },
                         false,
                         false
                    );
               let data = await datatables.populate();
               return ResponseData.status(200).json(data);
          } catch (e) {
               var result = {
                    Message: e.message,
                    Data: null,
                    Response: ResponseCode.DATA_NOT_FOUND
               }

               return ResponseData.status(400).json(result);
          }
     }

     async store(req, res) {

          try {
               // throw new Error("Error dap");

               let user = new M_users();
               let body = req.body;
               user.M_Groupuser_Id = body.M_Groupuser_Id;
               user.Username = body.Username;
               user.setPassword(body.Password);

               if (! await user.save()) {
                    throw new Error("Error dap");
               }

               var result = {
                    Message: "Data Tersimpan",
                    Data: user,
                    Response: ResponseCode.OK
               }
               res.status(200).send(result);

          } catch (e) {
               var result = {};
               if (e instanceof Error) {
                    result = {
                         Message: e.message,
                         Data: null,
                         Response: ResponseCode.FAILED_SAVE_DATA
                    }
               }
               if (e instanceof ModelError) {
                    result = {
                         Message: e.message,
                         Data: null,
                         Response: ResponseCode.FAILED_SAVE_DATA
                    }
               }
               res.status(400).send(result);
          }
     }

      async update() {
          var id = req.params.id;
          var user = await M_users.find(id);
          user.Username = "test update 1";
          await user.save();
          res.send(user)
     }

     async destroy() {
          try {
               let id = req.params.id;
               let user = await M_users.findOrFail(id);
               if (!await user.delete()) {
                    throw new Error("Gagal Menghapus data");
               }
               let result = {
                    Message: "Data Terhapus",
                    Data: user,
                    Response: ResponseCode.OK
               }

               res.status(400).send(result);
          } catch (e) {

               let result = {
                    Message: e.message,
                    Data: null,
                    Response: ResponseCode.FAILED_SAVE_DATA
               }

               res.status(400).send(result);
          }
     }


}

export default MuserController;