
const sayMyName = name => console.log(`Your name is ${name}.`)

/**
 * 
 * @param {*} number 
 */
const numberFactorial = number => {
    return number < 2 ? 1 : number * factorial2(number - 1);
  };

module.exports = {sayMyName, numberFactorial}
