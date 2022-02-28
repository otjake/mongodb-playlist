//require mocha
const mocha = require('mocha');

//require assert from node
const assert = require('assert');
//descibe the test with brackets
//within it test desctption and callback function for tests
describe('some demo test', function(){

    it('checks result of adding two numbers',function(){
        assert(3 + 5 === 8)
    })
})