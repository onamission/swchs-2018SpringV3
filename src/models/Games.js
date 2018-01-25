var BaseModel = require( './BaseModel' );
var jsonCLient = new( require( "../clients/JsonData"))()

function Games(){
    this.funcName = "games";
    BaseModel.call( this );
}

Games.prototype = Object.create(BaseModel);
module.exports = Games;