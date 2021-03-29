const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  if (!options.separator) options.separator = '+'
  if (!options.additionSeparator) options.additionSeparator = '|'

  if (str === null) {
    str = 'null'
  }
  if (options.addition === null) {
    options.addition = 'null'
  }


  let additionString = new Array(options.additionRepeatTimes)
    .fill(options.addition)
    .join(options.additionSeparator);

  let repeatablePart = []
  repeatablePart.push(str)
  repeatablePart.push(additionString)

  let answer = new Array(options.repeatTimes)
    .fill(repeatablePart.join(''))
    .join(options.separator);

  return answer;
};
