/**
 * @property {User} user
 * @property {string} socket
 * @property {int} points
 * @property {boolean} isOnline
 */
class Player {
    constructor(user, socket) {
        this.user = user;
        this.socket = socket;
        this.points = 0;
        this.isOnline = true;
    }

    addPoints(points) {
        this.points += points;
    }
}

module.exports = Player;