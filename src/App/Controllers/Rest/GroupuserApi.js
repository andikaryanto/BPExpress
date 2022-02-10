import ResponseData from '../../../Core/Controller/ResponseData.js';
import ResponseCode from '../../Constants/ResponseCode.js';
import ModelError from '../../Errors/ModelError.js';
import M_groupusers from '../../Models/M_groupusers.js';

class GroupuserApi {
    async getList() {
        try {
            const groupuser = await M_groupusers.collect();
            var result = {
                Message: 'Data Ditemukan',
                Data: groupuser.getItems(),
                Response: ResponseCode.OK,
            };

            return ResponseData.status(200).json(result);
        } catch (e) {
            var result = {
                Message: e.message,
                Data: null,
                Response: ResponseCode.DATA_NOT_FOUND,
            };

            return ResponseData.status(400).json(result);
        }
    }

    async store() {
        try {
            const groupuser = new M_groupusers();
            groupuser.GroupName = 'andik@gmail.com';
            if (! await groupuser.validate().save()) {
                throw new ModelError('Gagal Menyimpan Group User');
            }
            res.send('lolos');
        } catch (e) {
            res.send(e.message);
        }
    }
}

export default GroupuserApi;
