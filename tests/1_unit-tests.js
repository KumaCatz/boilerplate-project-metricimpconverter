const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('convertHandler should correctly read a whole number input.', () => {
        assert.isNumber(convertHandler.getNum(23))
    })
    test('convertHandler should correctly read a decimal number input.', () => {
        assert.isNumber(convertHandler.getNum(12.3))
    })
    test('convertHandler should correctly read a fractional input.', () => {
        assert.isNumber(convertHandler.getNum('12/3'))
    })
    test('convertHandler should correctly read a fractional input with a decimal.', () => {
        assert.isNumber(convertHandler.getNum('12.2/2'))
    })
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
        assert.throws(() => convertHandler.getNum('3/2/4'))
    })
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
        assert.equal(convertHandler.getNum('kg'), 1)  
    })
    test('convertHandler should correctly read each valid input unit.', () => {
        assert.isString(convertHandler.getUnit('kg'))
    })
    // test('convertHandler should correctly return an error for an invalid input unit.', () => {
        
    // })
    // test('convertHandler should return the correct return unit for each valid input unit.', () => {
        
    // })
    // test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', () => {
        
    // })
    // test('convertHandler should correctly convert gal to L.', () => {
        
    // })
    // test('convertHandler should correctly convert L to gal.', () => {
        
    // })
    // test('convertHandler should correctly convert mi to km.', () => {
        
    // })
    // test('convertHandler should correctly convert km to mi.', () => {
        
    // })
    // test('convertHandler should correctly convert lbs to kg.', () => {
        
    // })
    // test('convertHandler should correctly convert kg to lbs.', () => {
        
    // })
});