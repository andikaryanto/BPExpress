
import Container from '../../Core/Container/Container';
import Controller from '../../Core/Controller/Controller';
import ResponseData from '../../Core/Controller/ResponseData';
import View from '../../Core/Controller/View';
import yaml from 'js-yaml';
import Yaml from '../../Core/Libraries/Yaml';
import MuserRepository from '../Repositories/MuserRepository';
import MshopProductRepository from '../Repositories/MshopProductRepository';
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
    async index({request, response}: any) {
        const repo = await (new MshopProductRepository()).findAll();
        console.log(repo);
    }

    /**
     *
     * @param {{}} object {request, response, body, params, query}
     * @return {View}
     */
    form({request}: any) {
        return View.make('test/form');
    }

    /**
     *
     * @param {{}} object {request, response, body, params, query}
     * @return {View}
     */
    formPost({error}: any) {
        return ResponseData.status(200).json({message: 'berhasil'});
    }
}

export default TestController;
