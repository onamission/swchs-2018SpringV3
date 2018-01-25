function DealServiceFactory( numberOfPlayers, startCardPosition, cardsToDealThisRound, howToDealThisRound, remainingDeck ){
    this.classes = {
        "community": "DealToCommunity",
        "players": "DealToPlayers",
        "replace": "DealToReplace"
    };
    this.numberOfPlayers = numberOfPlayers;
    this.startCardPosition = startCardPosition;
    this.cardsToDealThisRound = cardsToDealThisRound;
    this.howToDealThisRound = howToDealThisRound;
    this.remainingDeck = remainingDeck;
}

DealServiceFactory.prototype.getDealServiceInstance = function getDealServiceInstance( type ){
    try{
        var instanceOfClass = new( require( "../services/dealServices/" + this.classes[ type ] ) ) () || false;
    }catch( error ){
        return new Error ( "No Class for type: '" + type + "'");
    }
    return instanceOfClass;
}

module.exports = DealServiceFactory;