function JsonData(){
}
JsonData.prototype.getDataFromFile = function ( fileName ){
    var dataSet = require( "../../data/" + fileName + ".json" );
    return dataSet;
};
module.exports = JsonData;