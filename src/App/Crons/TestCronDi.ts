import Repository from '../../Core/Repository/Repository';
import Cron from '../../Core/Utilities/Cron';
import Mgroupuser from '../Entity/Mgroupuser';
import MgroupuserRepository from '../Repositories/MgroupuserRepository';

/**
 * @class TestCronDi
 */
class TestCronDi extends Cron {
    /**
     * @var {MgroupuserRepository}
     */
    protected groupuserRepo;

    /**
     * @param {MgroupuserRepository} groupuserRepo
     */
    constructor(groupuserRepo: MgroupuserRepository) {
        super();
        this.groupuserRepo = groupuserRepo;
    }

    /**
     * @inheritdoc
     */
    time() {
        return '* * * * *';
    }

    /**
     * @inheritdoc
     */
    async execute() {
        console.log('TestCronDi');
        const grouup = new Repository<Mgroupuser>(Mgroupuser);
        const entity = grouup.newEntity();
        entity.getMusers();
        // console.log(await (await this.groupuserRepo.find(8)).toJson());
        // .then(groupuser => {
        //     console.log(groupuser);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
    }
}

export default TestCronDi;
