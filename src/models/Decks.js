var jsonCLient = new( require( "../clients/JsonData"))();
var BaseModel = require( './BaseModel' );

function Decks(){
    this.funcName = "decks";
    BaseModel.call( this );
}

Decks.prototype = Object.create(BaseModel.prototype);

/**
 * this gets a new deck of 52 cards
 *
 * @param {number} numberOfDecks the number of decks to fetch
 * @returns {array} of cards with face value and suit
 * @memberof Decks
 */
Decks.prototype.getNewDecks = function getNewDecks( numberOfDecks ){
    var suits = jsonCLient.getDataFromFile( "suits" );
    var cards = jsonCLient.getDataFromFile( "cards" );
    var deck = [];
    for( var deckCount = 0; deckCount < numberOfDecks; deckCount++ ){
        Object.keys( suits ).forEach( suit => {
            Object.keys( cards ).forEach( card => {
                deck.push( {
                    suit: suits[ suit ],
                    card: cards[ card ],
                    cardValue: `<span style='color: ${ suit.color }' title='${ card.name } of ${ suit.name }'><b>${ card.value } ${ suit.symbol }'</b></span>`
                } );
            })
        })
    }
    return deck;
}

/**
 * gets a new deck(s) and shuffles it in a random order
 *
 * @param {number} numberOfDecks the number of decks to shuffle together
 * @returns {array} of cards with face value and suit in random order
 * @memberof Decks
 */
Decks.prototype.shuffleDecks = function shuffleDecks( numberOfDecks ){
    var shuffledDeck = [];
    var newDeck = this.getNewDecks( numberOfDecks );
    while( newDeck.length ){
        var randomCard = Math.floor( Math.random() * newDeck.length );
        var c = newDeck.splice( randomCard, 1 )[ 0 ];
        shuffledDeck.push( c );
    }
    return shuffledDeck;
}

module.exports = Decks;