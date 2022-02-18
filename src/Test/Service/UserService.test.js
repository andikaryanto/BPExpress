import CommonService from '../../App/Services/Library/CommonService';
import MuserRepository from '../../App/Repositories/MuserRepository';
import M_users from '../../App/Models/M_users';
import UserService from '../../App/Services/UserService';
import MockModule from '../../Core/Test/MockModule';

describe('beforeRun', () => {
    const commonServiceMd5 = MockModule.mockModule(CommonService, 'encryptMd5', 'this-is-md5');
    const commonService = new CommonService();
    const userRepos = new MuserRepository();
    describe('login', () => {
        it('should return return M_user instance', async () => {
            const userRepoFind = MockModule.mockModule(MuserRepository, 'findOne', () => {
                const user = new M_users();
                user.Id = 1;
                user.Username = 'Andik';
                user.Photo = 'photo';
                return user;
            });

            const service = new UserService(commonService, userRepos);
            const result = await service.login('Andik', 'password');

            expect(result).toBeInstanceOf(M_users);
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
