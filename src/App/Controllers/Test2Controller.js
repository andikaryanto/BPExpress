
import Controller from '../../Core/Controller/Controller.js';
import ResponseData from '../../Core/Controller/ResponseData.js';
import View from '../../Core/Controller/View.js';
import MshopProductRepository from '../Repositories/MshopProductRepository.js';
import EntityManager from '../../Core/Entity/EntityManager.js';
import MgroupuserViewModel from '../ViewModel/Mgroupuser/MgroupuserViewModel.js';
import SuccessResponse from '../Responses/SuccessResponse.js';
import ResponseCode from '../Constants/ResponseCode.js';
import DbTrans from '../../Core/Database/DbTrans.js';
import MuserRepository from '../Repositories/MuserRepository.js';
import MgroupuserRepository from '../Repositories/MgroupuserRepository.js';
import MuserViewModel from '../ViewModel/Musers/MuserViewModel.js';
import Muser from '../Entity/Muser.js';
/**
 * @class TestController
 */
class Test2Controller extends Controller {
    /**
     * @var {EntityManager}
     */
    em;

    /**
     * @var {MuserRepository}
     */
    userRepo;

    /**
     * @param {EntityManager} em
     * @param {MuserRepository} userRepo;
     * @param {MgroupuserRepository} groupuserRepo;
     */
    constructor(em, userRepo, groupuserRepo) {
        super();
        this.em = em;
        this.userRepo = userRepo;
        this.groupuserRepo = groupuserRepo;
    }
    /**
     *
     * @param {{}} object {request, response, body, params, query}
     * @return {View}
     */
    async index({request, response}) {
        // const repo = await (new MuserRepository()).find(2);
        const repo = new Muser();
        repo.constrains['M_Groupuser_Id'] = 2;
        repo.setId(1);
        console.log(await repo.getGroupuser());
        return repo;
    }

    async store() {
        const groupuser = await this.groupuserRepo.find(6);
        const user = this.userRepo.newEntity();
        user.setUsername('Tes UserName')
            .setPassword('Desc Password')
            .setGroupuser(groupuser);


        const transacting = await DbTrans.beginTransaction();

        await this.em.setEntity(user).persist(transacting);
        await transacting.commit();
        const viewmodel = new MuserViewModel(user).toJson();
        return new SuccessResponse('Success', ResponseCode.OK, viewmodel);
    }

    async update() {
        const user = await this.userRepo.find(6);
        user.setGroupName('Test 67')
            .setDescription('Test 67');

        const transacting = await DbTrans.beginTransaction();

        await this.em.setEntity(user).persist(transacting);
        await transacting.commit();
        const viewmodel = new MuserViewModel(user).toJson();
        return new SuccessResponse('Success', ResponseCode.OK, viewmodel);
    }

    async destroy() {
        const groupuser = await this.userRepo.find(17);

        const transacting = await DbTrans.beginTransaction();

        await this.em.setEntity(groupuser).remove(transacting);
        await transacting.rollback();
        const viewmodel = new MgroupuserViewModel(groupuser).toJson();
        return new SuccessResponse('Success', ResponseCode.OK, viewmodel);
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

export default Test2Controller;
