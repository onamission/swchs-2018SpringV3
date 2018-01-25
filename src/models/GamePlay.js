var BaseModel = require( './BaseModel' );
var jsonCLient = new( require( "../clients/JsonData"))()

function GamePlay(){
    this.funcName = "gamePlay";
    BaseModel.call( this );
}

GamePlay.prototype = Object.create(BaseModel);
module.exports = GamePlay;