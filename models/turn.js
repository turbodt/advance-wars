/**
 *  Creates a game copy with game's info
 *  filtered to info that player can know.
 *
 *  As example, in a poker game, it should
 *  create a copy of the game with only
 *  the info of player's hand and the table.
 *
 * */

const Turn = function (game) {

    const dealer = game.players[ game.turn % game.players.length];
    const unitsWichHaveBeenAlreadyMoved = [];

    Object.defineProperties(this, {
        'dealer': {
            'enumerable': true,
            'configurable': false,
            'get': () => dealer,
        },

        'round': {
            'enumerable': true,
            'configurable': false,
            'get': () => Math.floor(game.turn/game.players.length),
        },

        'moveTo': {
            'enumerable': true,
            'configurable': false,
            'writable': false,
            'value': function (targetUnit, cell) {

                const alreadyMoved = unitsWichHaveBeenAlreadyMoved.some( unit => unit === targetUnit);

                if (alreadyMoved) {
                    console.error('This unit has been already moved this turn');
                    return this;
                }

            },
        },
    })

};


module.exports = Turn;