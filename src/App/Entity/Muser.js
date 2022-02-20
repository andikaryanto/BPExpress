import BaseEntity from './BaseEntity';

class Muser extends BaseEntity {
    Id;
    Groupuser;
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
     * @return {this}
     */
    setId(id) {
        this.Id = id;
        return this;
    }

    /**
     * Get Id
     * @return {number}
     */
    getMgroupuser() {
        return this.Mgroupuser;
    }

    /**
     * set Id
     * @param {M_groupusers} groupuser
     * @return {this}
     */
    setMgroupuser(groupuser) {
        this.Groupuser = groupuser;
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
     * @param {number} id
     * @return {this}
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
     * @param {string} id
     * @return {this}
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
     * @param {boolean} id
     * @return {this}
     */
    setPassword(isLoggedIn) {
        this.IsLoggedIn = isLoggedIn;
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
     * @param {boolean} id
     * @return {this}
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
     * @param {boolean} id
     * @return {this}
     */
    setIsActive(isActive) {
        this.IsActive = isActive;
        return this;
    }
}

export default Muser;
