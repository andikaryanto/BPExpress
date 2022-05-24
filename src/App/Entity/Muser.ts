import BaseEntity from './BaseEntity';
import Mgroupuser from './Mgroupuser';
/**
 * @class Muser
 */
class Muser extends BaseEntity {
    protected Id: number|string|undefined;
    protected Mgroupuser: Mgroupuser|undefined;
    protected Username: string|undefined;
    protected Password: string|undefined;
    protected Photo: string|undefined;
    protected IsLoggedIn: boolean|undefined;
    protected IsActive: boolean|undefined;

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     * Get Id
     * @return {number|string}
     */
    getId() {
        return this.Id;
    }

    /**
     * set Id
     * @param {number|string} id
     * @return {Muser}
     */
    setId(id: number|string) {
        this.Id = id;
        return this;
    }

    /**
     * Get Id
     * @return {Mgroupuser}
     */
    getMgroupuser() {
        return this.Mgroupuser;
    }

    /**
     * set Id
     * @param {Mgroupuser} Mgroupuser
     * @return {Muser}
     */
    setMgroupuser(Mgroupuser: Mgroupuser) {
        this.Mgroupuser = Mgroupuser;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getUsername() {
        return this.Username;
    }

    /**
     * set Id
     * @param {string} username
     * @return {Muser}
     */
    setUsername(username: string) {
        this.Username = username;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getPassword() {
        return this.Password;
    }

    /**
     * set Id
     * @param {string} password
     * @return {Muser}
     */
    setPassword(password: string) {
        this.Password = password;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getIsLoggedIn() {
        return this.IsLoggedIn;
    }

    /**
     * set Id
     * @param {boolean} isLoggedIn
     * @return {Muser}
     */
    setIsLoggedIn(isLoggedIn: boolean) {
        this.IsLoggedIn = isLoggedIn;
        return this;
    }

    /**
     * Get Id
     * @return {string}
     */
    getIsActive() {
        return this.IsActive;
    }

    /**
     * set Id
     * @param {boolean} isActive
     * @return {Muser}
     */
    setIsActive(isActive: boolean) {
        this.IsActive = isActive;
        return this;
    }
}

export default Muser;
