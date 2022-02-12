import sinon from 'sinon';
import {expect} from 'chai';
import CommonService from '../../App/Services/Library/CommonService';
import MuserRepository from '../../App/Repositories/MuserRepository';
import M_users from '../../App/Models/M_users';
import UserService from '../../App/Services/UserService';

describe('search', () => {
    it('should return return array', async () => {
        const commonService = new CommonService();
        sinon.stub(commonService, 'encryptMd5').returns('123h12b3h12314b14');
        const userRepos = new MuserRepository();
        let user = new M_users;
        user.Id = 1;
        user.Username = 'Andik';
        sinon.stub(userRepos, 'findOne').returns(user);

        const userService = new UserService(commonService, userRepos);
        const result = await userService.login('Andik', 'Password');

        expect(result).to.be.instanceOf(M_users);
        expect(result.Username).to.deep.equals('Andik');

        commonService.encryptMd5.restore();
        userRepos.findOne.restore();
    });
});
