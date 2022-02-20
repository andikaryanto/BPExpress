
import Container from '../../Core/Container/Container.js';
import Controller from '../../Core/Controller/Controller.js';
import ResponseData from '../../Core/Controller/ResponseData.js';
import View from '../../Core/Controller/View.js';
import yaml from 'js-yaml'
import Yaml from '../../Core/Libraries/Yaml.js';
import MuserRepository from '../Repositories/MuserRepository.js';
import MshopProductRepository from '../Repositories/MshopProductRepository.js';
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
       let repo = await (new MshopProductRepository()).findAll();
       console.log(repo);
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
