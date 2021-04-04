/**
 * 
 * @param {*} number 
 * return factorial from number
 */
const numberFactorial = number => {
    if(isNaN(number)) return null;
    return number < 2 ? 1 : number * numberFactorial(number - 1);
  };

  /**
   * 
   * @param {*} array 
   * flat array into arrays
   */
const flattenElements = (array) => array.reduce((accumulator, element) => accumulator.concat(element), [])

module.exports = {numberFactorial, flattenElements}
