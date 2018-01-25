var BaseModel = require( './BaseModel' );
var jsonCLient = new( require( "../clients/JsonData"))()

function ScoreOfHand(){
    this.funcName = "scoreOfHand";
    BaseModel.call( this );
}

ScoreOfHand.prototype = Object.create( BaseModel.prototype );

module.exports = ScoreOfHand;