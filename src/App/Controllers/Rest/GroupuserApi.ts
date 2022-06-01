import ResponseData from '../../../Core/Controller/ResponseData';
import ResponseCode from '../../Constants/ResponseCode';

/**
 * @class GroupuserApi
 */
class GroupuserApi {
    /**
     * Get all data groupuser /api/groupuser/list
     * @method GET
     * @return {ResponseData}
     */
    async getList() {
        // try {
        //     const groupuser = await M_groupusers.collect();
        //     const result = {
        //         Message: 'Data Ditemukan',
        //         Data: groupuser.getItems(),
        //         Response: ResponseCode.OK,
        //     };

        //     return ResponseData.status(200).json(result);
        // } catch (e) {
        //     const result = {
        //         Message: e.message,
        //         Data: null,
        //         Response: ResponseCode.DATA_NOT_FOUND,
        //     };

        //     return ResponseData.status(400).json(result);
        // }
    }

    /**
     * Store new groupuser /api/groupuser
     * @method POST
     * @return {ResponseData}
     */
    async store() {
        // try {
        //     const groupuser = new M_groupusers();
        //     groupuser.GroupName = 'andik@gmail.com';
        //     if (! await groupuser.validate().save()) {
        //         throw new ModelError('Gagal Menyimpan Group User');
        //     }
        //     res.send('lolos');
        // } catch (e) {
        //     res.send(e.message);
        // }
    }
}

export default GroupuserApi;
