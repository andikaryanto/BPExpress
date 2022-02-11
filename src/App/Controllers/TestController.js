
import Controller from '../../Core/Controller/Controller.js';
import ResponseData from '../../Core/Controller/ResponseData.js';
import View from '../../Core/Controller/View.js';
import UploadedFileError from '../../Core/Errors/UploadedFileError.js';
import File from '../../Core/Libraries/File.js';
import M_groupusers from '../Models/M_groupusers.js';
/**
 * @class TestController
 */
class TestController extends Controller {
    /**
     *
     */
    constructor() {
        super();
    }
    /**
     *
     * @param {{}} object {request, response, body, params, query}
     * @return {View}
     */
    async index({request, response}) {
        return View.sendFile('html/index.html', {messsage: 'asdasd'});
        // try {
        //      let users = await M_users.collect();
        //      // for(let user of users){
        //      //      user.Is;
        //      // }
        //      return ResponseData.status(200).json(users)
        // } catch (e) {
        //      return ResponseData.status(200).json({ message: e.message })
        // }

        // var g = new M_groupusers();
        // M_groupusers.findAll();
        // res.send("asdasd");
    }

    /**
     *
     * @param {{}} object {request, response, body, params, query}
     * @return {View}
     */
    form({request}) {
        return View.make('test/form');
    }

    /**
     *
     * @param {{}} object {request, response, body, params, query}
     * @return {View}
     */
    formPost({error}) {
        return ResponseData.status(200).json({message: 'berhasil'});
    }
}

export default TestController;
