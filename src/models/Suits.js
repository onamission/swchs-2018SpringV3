var BaseModel = require( './BaseModel' );
var jsonCLient = new( require( "../clients/JsonData"))()

function Suits(){
    this.funcName = "suits";
    BaseModel.call( this );
}
Suits.prototype = Object.create(BaseModel);
module.exports = Suits;