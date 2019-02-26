/**
 * @property {Date} roundEnd
 * @property {Player} master
 * @property {Player} explainer
 * @property {Card} card
 */
class Round {
    constructor(card, master, explainer, roundEnd) {
        this.card = card;
        this.master = master;
        this.explainer = explainer;
        this.roundEnd = roundEnd;
    }
}

module.exports = Round;