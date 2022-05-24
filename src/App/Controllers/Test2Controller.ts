
import Controller from '../../Core/Controller/Controller.js';
import ResponseData from '../../Core/Controller/ResponseData.js';
import View from '../../Core/Controller/View.js';
import MshopProductRepository from '../Repositories/MshopProductRepository.js';
import EntityManager from '../../Core/Entity/EntityManager.js';
import EntityUnit from '../../Core/Entity/EntityUnit';
import MgroupuserViewModel from '../ViewModel/Mgroupuser/MgroupuserViewModel.js';
import SuccessResponse from '../Responses/SuccessResponse.js';
import ResponseCode from '../Constants/ResponseCode.js';
import DbTrans from '../../Core/Database/DbTrans.js';
import MuserRepository from '../Repositories/MuserRepository.js';
import MgroupuserRepository from '../Repositories/MgroupuserRepository.js';
import MuserViewModel from '../ViewModel/Musers/MuserViewModel.js';
import Muser from '../Entity/Muser.js';
import MuserCollection from '../ViewModel/Musers/MuserCollection.js';
import Logger from '../../Core/Logger/Logger.js';
import Info from '../../Core/Logger/Info.js';
import DateFormat from '../../Core/Libraries/DateFormat.js';
/**
 * @class TestController
 */
class Test2Controller extends Controller {
    /**
     * @var {EntityManager}
     */
    private em: EntityManager;

    /**
     * @var {MuserRepository}
     */
    private userRepo: MuserRepository;

    /**
     * @var {EntityUnit}
     */
    private eu: EntityUnit;

    /**
     * @var {MgroupuserRepository}
     */
    private groupuserRepo: MgroupuserRepository;

    /**
     * @param {EntityManager} em
     * @param {EntityUnit} eu
     * @param {MuserRepository} userRepo;
     * @param {MgroupuserRepository} groupuserRepo;
     */
    constructor(
        em: EntityManager, 
        eu: EntityUnit, 
        userRepo: MuserRepository, 
        groupuserRepo: MgroupuserRepository
    ) {
        super();
        this.em = em;
        this.eu = eu;
        this.userRepo = userRepo;
        this.groupuserRepo = groupuserRepo;
    }
    /**
     *
     * @param {any} props {request, response, body, params, query}
     * @return {View}
     */
    async index(props: any) {

        let { response } = props;
        // console.log(DateFormat.makeDbDate(new Date()))
        // const param = {
        //     where: {
        //         Username: 'test',
        //     },
        // };

        // const data = [];
        // const repo = await (new MuserRepository()).collect({}, query.page, query.size);
        // for (const r of repo) {
        //     console.log(r.getCreated()?.getFullYear());
        // }
        // const userViewModel = (new MuserCollection(repo));
        // Info.create(
        //     'userViewModel_',
        //     'userViewModel ' + JSON.stringify(await userViewModel.proceedAndGetData()),
        // );
        // return (new SuccessResponse('oke', ResponseCode.OK, userViewModel));
        let eny = await (new MgroupuserRepository()).find(8);
        let groupuser = await (eny).toJson();
        console.log(eny.getRules());
        console.log(groupuser);
        response.send({ok:"ok"});
    }

    /**
     *
     * @return {SuccessResponse}
     */
    async store() {
        const groupuser = await this.groupuserRepo.find(6);
        const user = this.userRepo.newEntity();
        user.setUsername('Tes UserName 1')
            .setPassword('Desc Password 1')
            .setMgroupuser(groupuser)
            .setCreated(new Date());


        const transacting = await DbTrans.beginTransaction();

        await this.em.persist(user, transacting);
        await transacting.commit();
        const viewmodel = await new MuserViewModel(user).toJson();
        return new SuccessResponse('Success', ResponseCode.OK, viewmodel);
    }

    /**
     *
     * @return {SuccessResponse}
     */
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

    /**
     *
     * @return {SuccessResponse}
     */
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
