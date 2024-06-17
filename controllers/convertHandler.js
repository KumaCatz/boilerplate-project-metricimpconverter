function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    const checkType = typeof input

    switch (checkType) {
      case 'number':
        result = input
        break

      case 'string':
        if (!input[0].match(/[0-9]/)) {
          input = '1' + input;
        }

        const match = input.match(/[a-zA-Z]/);
        if (match) {
          input = input.substring(0, match.index);
          console.log(input)
        }

        if (input.includes('/')) {
          const numberOfFractions = input.match(/\//g)
          if (numberOfFractions.length > 1) throw new Error()

          const arrayOfNumbers = input.split('/')
    
          const numerator = +arrayOfNumbers[0]
          const denominator = +arrayOfNumbers[1]
    
          if (numerator === 0 || denominator === 0) {
            throw new Error("invalid number")
          }
    
          result = numerator / denominator
        } else {
          result = input
        }
        break

      default:
        throw new Error("Invalid input type. Please input a string or number only.")
    }

    return Number(result);
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
