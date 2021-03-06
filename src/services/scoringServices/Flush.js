var ScoringService = require( './ScoringService' );

function Flush() {
    ScoringService.call( this );
}
Flush.prototype = Object.create( ScoringService );

Flush.prototype.getScore = function( handScore ){
    var self = this;
    var data = pokerData.getData();
    Object.keys(this.flushes).forEach( function( flush ){
        // flushes we will border in gray
        if( this.flushes[flush].length > 4 ){
            var highCard = 1;
            this.flushes[flush].forEach( c =>{
                if( handScore.score < data.handScoring.S.score ) {
                    var cardFace = data.cardKeys[ c.order ];
                    if( parseInt( highCard ) < parseInt( cardFace ) ){
                        highCard = cardFace;
                    }
                }
            });
            // if the score is also a straight, set it to a straight flush or royal flush
            if( handScore.score == data.handScoring.S.score ) {
                this.flushes[flush].forEach( card =>{
                    self.changeEleByIdStyle( card.position, 'flush') ;
                });
                handScore.score = cardOrder == 14 ? data.handScoring.RF.score : data.handScoring.SF.score;
                handScore.label = cardOrder == 14 ? data.handScoring.RF.label : data.handScoring.SF.label;
                handScore.high = data.cardValues[cardOrder] + " high";
            };

            // if the score is not as high as a flush, set it to a flush
            if( handScore.score < data.handScoring.F.score ) {
                thsi.flushes[flush].forEach( card =>{
                    self.replaceClassByElementId( card.position, 'flush') ;
                });
                handScore.score = data.handScoring.F.score;
                handScore.label = data.handScoring.F.label;
                handScore.high = data.cardValues[highCard] + " high";
            };
        }
    });
    return handScore;
};

module.exports = Flush;