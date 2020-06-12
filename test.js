var assert = require('assert');
var javascriptFunctions = require('./javascriptFunctions');

describe('givenTwoIntegersWhenSumThenSuccess()', function(){
    it('sum(1,2) = 3', function(){

        //Given
        var a = 1;
        var b = 2;
        var expectedResult = 3;

        //When
        var actualResult = javascriptFunctions.sum(a,b);

        //Then
        assert.equal(expectedResult,actualResult);
    });
});

describe('givenA1ThenOctal()', function(){
    it('1 = 1', function(){

        //Given
        var a = 1;
        var expectedResult = 1;

        //When
        var actualResult = javascriptFunctions.octal(a);

        //Then
        assert.equal(expectedResult,actualResult);
    });
});

describe('givenA2ThenOctal()', function(){
    it('2 = 2', function(){

        //Given
        var a = 2;
        var expectedResult = 2;

        //When
        var actualResult = javascriptFunctions.octal(a);

        //Then
        assert.equal(expectedResult,actualResult);
    });
});

describe('givenA8ThenOctal()', function(){
    it('8 = 10', function(){

        //Given
        var a = 8;
        var expectedResult = 10;

        //When
        var actualResult = javascriptFunctions.octal(a);

        //Then
        assert.equal(expectedResult,actualResult);
    });
});

describe('givenA95ThenOctal()', function(){
    it('95 = 137', function(){

        //Given
        var a = 95;
        var expectedResult = 137;

        //When
        var actualResult = javascriptFunctions.octal(a);

        //Then
        assert.equal(expectedResult,actualResult);
    });
});

describe('givenA2048ThenOctal()', function(){
    it('2048 = 4000', function(){

        //Given
        var a = 2048;
        var expectedResult = 4000;

        //When
        var actualResult = javascriptFunctions.octal(a);

        //Then
        assert.equal(expectedResult,actualResult);
    });
});