import Cron from '../../Core/Utilities/Cron';

class TestCronDi extends Cron {

    /**
     * @var {MgroupuserRepository}
     */
    #_groupuserRepo;

    /**
     * @param {MgroupuserRepository} groupuserRepo
     */
    constructor(){
        super();
        this.#_groupuserRepo = groupuserRepo;
    }

    time() {
        return '1 * * * *';
    }

    execute() {
        // const guser = await this.#_groupuserRepo.find(8);
        // console.log(guser);
    }
}

export default TestCronDi;
