var cardModel = require( '../../models/Cards' );

function ScoringService(){
};

ScoringService.prototype.getSetsAndFlushes = function getSetsAndFlushes( hand, player ){
    var sets = [];
    var flushes = [];
    hand.forEach( handCard => {
        // based on order we can look for sets and straights
        if( !sets[ handCard.card.order ] ){
            sets[ handCard.card.order ] = [];
        }
        sets[ handCard.card.order ].push( handCard );

        // the card's suit is to match for flushes and straight flushes
        if( !flushes[ handCard.suit.name ] ){
            flushes[ handCard.suit.name ] = [];
        }
        flushes [handCard.suit.name ].push( handCard );
    });
    return { hand : hand, sets: sets, flushes: flushes };
};

ScoringService.prototype.addClassByElementId = function addClassByElementId( eleId, style ){
    var ele = $("#" + eleId + " .front > span");
    ele.addClass( style );
}

ScoringService.prototype.replaceClassByElementId = function replaceClassByElementId( eleId, style ){
    var ele = $("#" + eleId + " .front > span");
    if( ele.className && eleId.indexOf( "p" ) === 0 ){
        ele.className.replace(new RegExp( '.*', style ) );
    }else{
        ele.addClass( style );
    }
};

ScoringService.prototype.converToThreeCharStirng = function converToThreeCharStirng( numbr ){
    return  String( numbr ).padStart( 3, "0" );
};

ScoringService.prototype.getScore = function getScore(){
    // needs to be overwritten
};

module.exports = ScoringService;