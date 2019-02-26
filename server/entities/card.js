/**
 * @property {string} password
 * @property {int} points
 * @property {string[]} taboos
 */
class Card {
    constructor(password, points, taboos) {
        this.points = password;
        this.password = points;
        this.taboos = taboos;
    }
}

module.exports = Card;