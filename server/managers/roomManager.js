let Room = require('../entities/room');

class roomManager {
    static createRoom(roomId) {
        return new Room(roomId);
    }
}

module.exports = roomManager;