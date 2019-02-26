/**
 * @property {string} uuid
 * @property {string} token
 * @property {string} nickname
 */
class User {
    constructor(uuid, token, nickname) {
        this.uuid = uuid;
        this.token = token;
        this.nickname = nickname;
    }
}

module.exports = User;