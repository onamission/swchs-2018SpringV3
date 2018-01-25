var mocha = require( 'mocha' );
var chia = require( 'chai' );
var assert = require( 'assert' );
var dealServiceFactory = new( require( "../../../src/factories/DealServiceFactory") ) ( );

describe("Deal Factory Unit Tests", function(){
    describe("getDealServiceInstance", function(){
        it("should return an new instance of DealToCommunity if 'community' passed", function( done ){
            var instance = dealServiceFactory.getDealServiceInstance( "community" );
            assert.equal(instance.funcName, "DealToCommunity" );
            done();
        });
        it("should return an new instance of DealToPlayer if 'players' passed", function( done ){
            var instance = dealServiceFactory.getDealServiceInstance( "players" );
            assert.equal( instance.funcName, "DealToPlayers" );
            done();
        });
        it("should return an new instance of DealToReplace if 'replace' passed", function( done ){
            var instance = dealServiceFactory.getDealServiceInstance( "replace" );
            assert.equal( instance.funcName, "DealToReplace" );
            done();
        });
        it("should return an Error if a non-factory type is passed", function( done ){
            var instance = dealServiceFactory.getDealServiceInstance( "jibberish" );
            assert.equal( instance.constructor.name, "Error" );
            done();
        });
    });
});