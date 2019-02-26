const RoundClass = require('../entities/round');
const CardRepository = require('../repositories/cardRepository');
const PlayerManager = require('./playerManager');

const ROUND_DURATION = 120; // in seconds

const MASTER_REWARD_POINTS = 5;

class GameManager {

    /**
     * Fired when someone guessed the password
     * @param {Room} room
     * @param {Player} guesser
     */
    static passwordGuessed(room, guesser) {
        // reward guesser and explainer
        guesser.addPoints(room.getCurrentRound().card.points);
        room.getCurrentRound().explainer.addPoints(room.getCurrentRound().card.points);

        room.masterChange--;
        if (room.shouldMasterChange()) {
            room.getCurrentRound().master.addPoints(MASTER_REWARD_POINTS);

            // pick new game master
            const master = PlayerManager.getRandomPlayer(room, [guesser, room.getCurrentRound().master]);

            // guesser will become the new explainer
            this.nextRound(room, guesser, master);
            return;
        }

        this.nextRound(room, guesser, room.getCurrentRound().master);
    }

    /**
     * Fired when next round was forced by the game master
     * @param {Room} room
     */
    static cardChangedByMaster(room) {
        const master = room.getCurrentRound().master;
        const explainer = room.getCurrentRound().explainer;

        this.nextRound(room, explainer, master);
    }

    /**
     * Fired when next round was forced by the explainer
     * @param {Room} room
     */
    static cardChangedByExplainer(room) {
        const master = room.getCurrentRound().master;
        const explainer = room.getCurrentRound().explainer;

        explainer.addPoints(-1);

        this.nextRound(room, explainer, master);
    }

    /**
     * Fired when roundEnd date was exceeded
     * @param {Room} room
     */
    static roundExpired(room) {
        const explainer = PlayerManager.getRandomPlayer(room, [room.getCurrentRound().master, room.getCurrentRound().explainer]);

        room.masterChange--;
        if (room.shouldMasterChange()) {
            room.getCurrentRound().master.addPoints(MASTER_REWARD_POINTS);

            // pick new game master
            const master = PlayerManager.getRandomPlayer(room, [room.getCurrentRound().master]);

            // guesser will become the new explainer
            this.nextRound(room, explainer, master);
            return;
        }



        this.nextRound(room, guesser, room.getCurrentRound().master);
    }

    /**
     * @private see: this.passwordGuessed, this.cardChangedByMaster,
     * this.cardChangedByExplainer or this.roundExpired
     *
     * @param {Room} room
     * @param {Player} explainer New explainer
     * @param {Player} master New master
     */
    static nextRound(room, explainer, master) {
        const card = CardRepository.getRandomCard();

        const roundEnd = new Date();
        roundEnd.setTime(roundEnd.getTime() + ROUND_DURATION * 1000);

        let Round = new RoundClass(card, master, explainer, roundEnd);
        room.rounds.push(Round);
        room.roundRotate();
    }
}

module.exports = GameManager;