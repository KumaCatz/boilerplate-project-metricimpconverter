function ConvertHandler() {
  this.getNum = function (input) {
    let result = input;

    const checkType = typeof result;

    switch (checkType) {
      case 'number':
        break;

      case 'string':
        if (!result[0].match(/[0-9]/)) {
          result = '1' + result;
        }

        const match = result.match(/[a-zA-Z]/);
        if (match) {
          result = result.substring(0, match.index);
        }

        if (result.includes('/')) {
          const numberOfFractions = result.match(/\//g);
          if (numberOfFractions.length > 1) return undefined;

          const arrayOfNumbers = result.split('/');

          const numerator = +arrayOfNumbers[0];
          const denominator = +arrayOfNumbers[1];

          if (numerator === 0 || denominator === 0) {
            return undefined;
          }

          result = numerator / denominator;
        }
        break;

      default:
        return undefined;
    }

    return Number(result);
  };

  this.getUnit = function (input) {
    let result = input;

    const match = result.match(/[a-zA-Z]/);

    const unit = result.substring(match.index, result.length).toLowerCase();

    if (!unit.match(/^(gal|l|mi|km|lbs|kg)$/)) {
      return undefined;
    }

    if (unit === 'l') {
      return (result = 'L');
    }

    return (result = unit);
  };

  this.getReturnUnit = function (initUnit) {
    let result = initUnit;

    switch (result) {
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default:
        console.log('convertUnit bad case detected');
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    switch (unit) {
      case 'gal':
        unit = 'gallons';

        break;
      case 'L':
        unit = 'liters';

        break;
      case 'mi':
        unit = 'miles';

        break;
      case 'km':
        unit = 'kilometers';

        break;
      case 'lbs':
        unit = 'pounds';

        break;
      case 'kg':
        unit = 'kilograms';

        break;
      default:
        console.log('convertString bad case detected');
    }

    result = unit;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        console.log('convertNumber bad case detected');
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    const initUnitString = this.spellOutUnit(initUnit);
    const returnUnitString = this.spellOutUnit(returnUnit);

    result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;

    return result;
  };
}

module.exports = ConvertHandler;
