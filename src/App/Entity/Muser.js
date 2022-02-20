import BaseEntity from "./BaseEntity";

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
     * @returns {number} 
     */
    getId() {
        return this.Id;
    }

    /**
     * set Id
     * @param {number} id
     * @returns {this} 
     */
    setId(id) {
        this.Id = id;
        return this;
    }

    /**
     * Get Id
     * @returns {number} 
     */
    getMgroupuser() {
        return this.Mgroupuser;
    }

    /**
     * set Id
     * @param {M_groupusers} groupuser
     * @returns {this} 
     */
    setMgroupuser(groupuser) {
        this.Groupuser = groupuser;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getUsername() {
        return this.Username;
    }

    /**
     * set Id
     * @param {number} id
     * @returns {this} 
     */
    setUsername(username) {
        this.Username = username;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getPassword() {
        return this.Password;
    }

    /**
     * set Id
     * @param {string} id
     * @returns {this} 
     */
    setPassword(password) {
        this.Password = password;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getIsLoggedIn() {
        return this.IsLoggedIn;
    }

    /**
     * set Id
     * @param {boolean} id
     * @returns {this} 
     */
    setPassword(isLoggedIn) {
        this.IsLoggedIn = isLoggedIn;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getIsLoggedIn() {
        return this.IsLoggedIn;
    }

    /**
     * set Id
     * @param {boolean} id
     * @returns {this} 
     */
    setIsLoggedIn(isLoggedIn) {
        this.IsLoggedIn = isLoggedIn;
        return this;
    }

    /**
     * Get Id
     * @returns {string} 
     */
    getIsActive() {
        return this.IsActive;
    }

    /**
     * set Id
     * @param {boolean} id
     * @returns {this} 
     */
    setIsActive(isActive) {
        this.IsActive = isActive;
        return this;
    }
}

export default Muser;