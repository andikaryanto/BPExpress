import ModelError from '../Errors/ModelError';
import CommonLib from '../Libraries/CommonLib';
import Cast from '../Traits/Cast';
import BaseModel from './BaseModel';
import M_groupusers from './M_groupusers';

/**
 * @class M_users
 */
class M_users extends BaseModel {
    public Id?: number;
    public M_Groupuser_Id?: number;
    public Username?: string;
    public Password?: string;
    public Photo?: string;
    public IsLoggedIn?: number;
    public IsActive?: number;
    public CreatedBy?: string;
    public Modified?: string;
    public ModifiedBy?: string;

    private static cast = {
        IsLoggedIn: 'boolean',
        IsActive: 'boolean',
    };

    /**
     *
     */
    constructor() {
        super('m_users', 'Id', M_users.cast);
        this.IsActive = 1;
        this.IsLoggedIn = 0;
    }

    /**
     * Set hashed password
     * @param {string} password
     * @return {void}
     */
    setPassword(password: string): void {
        if (this.Username == null) {
            throw new ModelError('Username belum di set', this);
        }

        this.Password = CommonLib.encryptMd5(CommonLib.getKey() + this.Username + password);
    }

    /**
     * Get groupuser object
     * @return {Promise<M_groupusers | null>}
     */
    async M_Groupuser(): Promise<M_groupusers | null> {
        const groupuser = await M_groupusers.find(this.M_Groupuser_Id);
        return groupuser;
    }
}

export default M_users;
