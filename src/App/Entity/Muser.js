import BaseEntity from './BaseEntity';
import Mgroupuser from './Mgroupuser';
/**
 * @class Muser
 */
class Muser extends BaseEntity {
    Id;
    Mgroupuser;
    Username;
    Password;
    Photo;
    IsLoggedIn;
    IsActive;

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     * Get Id
     * @return {number}
     */
    getId() {
        return this.Id;
    }

    /**
     * set Id
     * @param {number} id
     * @return {Muser}
     */
    setId(id) {
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
     * @param {Mgroupuser} groupuser
     * @return {Muser}
     */
    setMgroupuser(groupuser) {
        this.Mgroupuser = groupuser;
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
     * @param {number} username
     * @return {Muser}
     */
    setUsername(username) {
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
    setPassword(password) {
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
    setIsLoggedIn(isLoggedIn) {
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
    setIsActive(isActive) {
        this.IsActive = isActive;
        return this;
    }
}

export default Muser;
