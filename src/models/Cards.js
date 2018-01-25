var BaseModel = require( './BaseModel' );
var jsonCLient = new( require( "../clients/JsonData"))()

function Cards(){
    this.funcName = "cards";
    BaseModel.call( this );
}

Cards.prototype = Object.create(BaseModel.prototype);

module.exports = Cards;