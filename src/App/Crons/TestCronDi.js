import Cron from '../../Core/Utilities/Cron';
import MgroupuserRepository from '../Repositories/MgroupuserRepository';

class TestCronDi extends Cron {

    /**
     * @var {MgroupuserRepository}
     */
    groupuserRepo;

    /**
     * @param {MgroupuserRepository} groupuserRepo
     */
    constructor(groupuserRepo){
        super();
        this.groupuserRepo = groupuserRepo;
    }

    time() {
        return '* * * * *';
    }

    async execute() {
        console.log('TestCronDi');
        console.log(await (await this.groupuserRepo.find(8)).toJson());
        // .then(groupuser => {
        //     console.log(groupuser);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
    }
}

export default TestCronDi;
