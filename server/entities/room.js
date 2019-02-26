const ROUNDS_LIMIT = 10;

/**
 * @property {int} roomId
 * @property {Round[]} rounds
 * @property {Player[]} players
 * @property {int} masterChange For how many rounds game master will change
 */
class Room {
    constructor(roomId) {
        this.roomId = roomId;
        this.rounds = [];
        this.players = [];
        this.masterChange = 4;
    }

    /**
     * Remotes old round objects after reaching specified limit
     */
    roundRotate() {
        if (this.rounds.length > 10) {
            this.rounds.splice(0, this.rounds.length - ROUNDS_LIMIT);
        }
    }

    /**
     * @returns {Round}
     */
    getCurrentRound() {
        return this.rounds[this.rounds.length - 1];
    }

    shouldMasterChange() {
        return this.masterChange === 0;
    }
}

module.exports = Room;