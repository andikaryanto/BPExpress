import ResponseCode from '../../Constants/ResponseCode.js';
import M_groupusers from '../../Models/M_groupusers.js';
import {renderToString} from 'react-dom/server';
import View from '../../../Core/Controller/View.js';
import ResponseData from '../../../Core/Controller/ResponseData.js';
import BaseController from '../BaseController.js';
import Redirect from '../../../Core/Controller/Redirect.js';
import DbConnection from '../../../Core/Database/Connection/DbConnection.js';
import M_users from '../../Models/M_users.js';

class MgroupuserController extends BaseController {
    constructor() {
        super();
    }

    async index() {
        try {
            return View.make('office/m_groupuser/index', {title: 'Grup Pengguna'});
            // res.render('office/m_groupuser/index', { title : 'Grup Pengguna' } );
        } catch (e) {
            // var result = {
            //     Message: e.message,
            //     Data: null,
            //     Response: ResponseCode.DATA_NOT_FOUND
            // }

            // res.status(400).json(result);
        }
    }

    async getById({request, ...props}) {
        try {
            const Id = request.params.Id;
            return ResponseData.status(200).json({Id: Id, ...this.globalData, ...props});
            // res.render('office/m_groupuser/index', { title : 'Grup Pengguna' } );
        } catch (e) {
            // var result = {
            //     Message: e.message,
            //     Data: null,
            //     Response: ResponseCode.DATA_NOT_FOUND
            // }

            // res.status(400).json(result);
        }
    }

    async list() {
        try {
            return ResponseData.status(200).json({list: 'list'});
            // res.render('office/m_groupuser/index', { title : 'Grup Pengguna' } );
        } catch (e) {
            // var result = {
            //     Message: e.message,
            //     Data: null,
            //     Response: ResponseCode.DATA_NOT_FOUND
            // }

            // res.status(400).json(result);
        }
    }

    async getAllData() {
        try {
            const filter = {};
            const datatables = M_groupusers.datatables(filter);
            datatables.addDtRowClass('rowdetail').
                addDtRowId('Id').
                addColumn(
                    'Id',
                    null,
                    null,
                    false,
                    false,
                ).
                addColumn(
                    '',
                    null,
                    function(row, i) {
                        return i + 1;
                    },
                    false,
                    false,
                ).
                addColumn(
                    'GroupName',
                ).
                addColumn(
                    'Description',
                ).
                addColumn(
                    'Created',
                    null,
                    null,
                    false,
                ).
                addColumn(
                    '',
                    null,
                    function(row, id) {
                        return `<a href='#' class='btn btn-info edit' data-bs-toggle='modal' data-bs-target='#ubahModal'>Ubah</a>
                        <a href='#' class='btn btn-danger delete' data-bs-toggle='modal' data-bs-target='#hapusModal'>Hapus</a>`;
                    },
                    false,
                    false,
                );
            const data = await datatables.populate();
            return ResponseData.status(200).json(data);
        } catch (e) {
            const result = {
                Message: e.message,
                Data: null,
                Response: ResponseCode.DATA_NOT_FOUND,
            };

            return ResponseData.status(400).json(result);
        }
    }

    async update() {
        const group = await M_groupusers.find(5)
            .then((object) => {
                object.GroupName = 'Ganti 5';
                object.save().then((lastId) => {
                    res.status(200).send('berhasil dengan kode ' + lastId);
                });
            });
    }

    test() {
        this.reponse.send('test');
    }
}

export default MgroupuserController;
