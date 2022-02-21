import CommonService from '../../App/Services/Library/CommonService';
import MuserRepository from '../../App/Repositories/MuserRepository';
import UserService from '../../App/Services/UserService';
import MockModule from '../../Core/Test/MockModule';
import Muser from '../../App/Entity/Muser';

describe('beforeRun', () => {
    const commonServiceMd5 = MockModule.mockModule(CommonService, 'encryptMd5', 'this-is-md5');
    const commonService = new CommonService();
    const userRepos = new MuserRepository();
    describe('login', () => {
        it('should return return M_user instance', async () => {
            const userRepoFind = MockModule.mockModule(MuserRepository, 'findOne', () => {
                const user = (new Muser()).setId(1).setUsername('Andik');
                return user;
            });

            const service = new UserService(commonService, userRepos);
            const result = await service.login('Andik', 'password');

            expect(result).toBeInstanceOf(Muser);
            expect(commonServiceMd5).toHaveBeenCalled();
            expect(userRepoFind).toHaveBeenCalled();
        });

        it('should return return null', async () => {
            const userRepoFind = MockModule.mockModule(MuserRepository, 'findOne', null);

            const service = new UserService(commonService, userRepos);
            const result = await service.login('Andik', 'password');

            expect(result).toBeNull();
            expect(commonServiceMd5).toHaveBeenCalled();
            expect(userRepoFind).toHaveBeenCalled();
        });
    });
});
