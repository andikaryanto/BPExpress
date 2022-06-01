import CommonService from '../../App/Services/Library/CommonService';
import MuserRepository from '../../App/Repositories/MuserRepository';
import UserService from '../../App/Services/UserService';
import MockModule from '../../Core/Test/MockModule';
import Muser from '../../App/Entity/Muser';
import ContainerLoader from '../../Core/Container/ContainerLoader';

describe('beforeRun', () => {

    const container =  ContainerLoader.load();
    const commonServiceMd5 = MockModule.mockModule(CommonService, 'encryptMd5', 'this-is-md5');
    const commonService = container.get('library.common.service');
    const userRepos = container.get('user.repository');
    const jwt = container.get('library.jwt.service');
    const eu = container.get('entity-unit');
    describe('login', () => {
        it('should return return M_user instance', async () => {
            const userRepoFind = MockModule.mockModule(MuserRepository, 'findOne', () => {
                const user = (new Muser()).setId(1).setUsername('Lola');
                return user;
            });

            const service = new UserService(commonService, userRepos, jwt, eu);
            const result = await service.login('Lola', 'password');
            
            expect(result).toBeInstanceOf(Muser);
            expect(commonServiceMd5).toHaveBeenCalled();
            expect(userRepoFind).toHaveBeenCalled();
        });

        it('should return return null', async () => {
            const userRepoFind = MockModule.mockModule(MuserRepository, 'findOne', null);

            const service = new UserService(commonService, userRepos, jwt, eu);
            const result = await service.login('Andik', 'password');

            expect(result).toBeNull();
            expect(commonServiceMd5).toHaveBeenCalled();
            expect(userRepoFind).toHaveBeenCalled();
        });
    });
});
